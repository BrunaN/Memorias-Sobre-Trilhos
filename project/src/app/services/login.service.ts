import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Usuario } from '../models/usuario.model';

@Injectable()
export class LoginService{

    url: string = 'http://localhost:3000/api/users/login';
    user: Usuario;

    constructor( private http : Http){};

    ngOnInit() {
        
    }

    initial(){
        let text = window.localStorage.getItem("user");
        if(text){
            this.user = JSON.parse(text);
            console.log(this.user);
        }
    }

    local(user:Usuario){
        this.user = user;
        window.localStorage.setItem("user", JSON.stringify(user));
    }

    login(email, password){
        return this.http.post(this.url, {'email': email, 'password': password})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error));
    };

    userLogged(){
        return this.user;
    };

    logout(){
        this.user = undefined;
    };

}