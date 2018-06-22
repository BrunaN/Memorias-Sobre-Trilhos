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
            let res = JSON.parse(text);
            this.user = new Usuario(res._id, res.name, res.email, res.password, res.avatar, res.estado, res.cidade);
        }
    }

    local(user:Usuario){
        this.user = user;
        window.localStorage.setItem("user", JSON.stringify(user));
    }

    login(email, password){
        return this.http.post(this.url, {'email': email, 'password': password})
            .map((response: Response) => {
                let res = response.json();
                let user = new Usuario(res._id, res.name, res.email, res.password, res.avatar, res.estado, res.cidade);
                this.local(user);
                return user;
            })
            .catch((error: Response) => Observable.throw(error));
    };

    userLogged(){
        return this.user;
    };

    logout(){
        this.user = undefined;
        window.localStorage.removeItem('user');
    };

}
