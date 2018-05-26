import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Cidade } from '../models/cidade.model';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class UsuarioService {

    urlUsuarios: string = 'http://localhost:3000/api/users';

    constructor(private http: Http) { }
    usuarios: Usuario[] = [];

    adicionar(usuario: Usuario) {
        this.usuarios.push(usuario);
        return this.http.post(this.urlUsuarios, usuario)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error));
    }
    
    getUsuarios() {
        return this.http.get(this.urlUsuarios)
            .map((response: Response) => {
                this.usuarios = [];
                for (let usuario of response.json()) {
                    this.usuarios.push(new Usuario(usuario.id, usuario.nomeUsuario, usuario.email, usuario.password, usuario.estado, usuario.cidade))
                }
                return this.usuarios;
            })
            .catch((error: Response) => Observable.throw(error));
    }
}