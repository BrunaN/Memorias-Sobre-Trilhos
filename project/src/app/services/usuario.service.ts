import { Usuario } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Cidade } from '../models/cidade.model';

@Injectable()
export class UsuarioService {

    urlUsuarios: string = 'http://localhost:3000/api/users';

    constructor(private http: Http) { }
    usuarios: Usuario[] = [];

    adicionar(usuario: Usuario) {
        this.usuarios.push(usuario);
        return this.http.post(this.urlUsuarios, usuario)
            .map((response: Response) => {
                let res = response.json();
                console.log(res);
                let user = new Usuario(res._id, res.name, res.email, res.password, res.avatar);
                return user
            })
            .catch((error: Response) => Observable.throw(error));
    }
    
    getUsuarios() {
        return this.http.get(this.urlUsuarios)
            .map((response: Response) => {
                this.usuarios = [];
                for (let usuario of response.json()) {
                    this.usuarios.push(new Usuario(usuario._id, usuario.nomeUsuario, usuario.email, usuario.password, usuario.avatar))
                }
                return this.usuarios;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    update(usuario: Usuario){
        let formData = new FormData();
        if (usuario.avatar) {
          formData.append('avatar', usuario.avatar);
        }

        for ( let key in usuario ) {
          if(key != 'avatar' && usuario[key]){
            console.log(key, usuario[key]);
            formData.append(key, usuario[key]);
          }
        }
        console.log(formData)
        return this.http.put((this.urlUsuarios + "/" + usuario._id), formData)
                        .map((response: Response) => {
                            let res = response.json();
                            let post = new Usuario(res._id, res.name, res.email, res.password, res.avatar);
                            return post;
                        })
                        .catch((error: Response) => Observable.throw(error));
    }
}