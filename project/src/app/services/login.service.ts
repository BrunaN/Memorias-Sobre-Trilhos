import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Usuario } from '../models/usuario.model';

@Injectable()
export class LoginService {

    constructor( private http : Http){ };

    urlUsuarios: string = "";
    
    user: Usuario;
    token: string;

    login(email, password){
        return this.http.post(this.urlUsuarios, {email: email, password: password})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error));
    };

    userLogged(){
        return this.user;
    };

    logout(){
        this.user = undefined;
        this.token = undefined;
    };

}