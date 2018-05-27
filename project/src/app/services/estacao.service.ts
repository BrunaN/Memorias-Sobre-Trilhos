import { Station } from '../models/station.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class EstacaoService {

    url: string = 'http://localhost:3000/api/stations';

    constructor( private http : Http){ };

    estacoes: Station [] = [];

    getEstacao(id: string){
        return this.http.get(this.url+"/"+id)
                        .map((response: Response) => {
                            let estacao = response.json();
                            return new Station(estacao._id, estacao.name, estacao.users, estacao.posts, estacao.photo, estacao.id);
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

}
