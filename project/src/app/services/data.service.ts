import { Estado } from '../models/estado.model';
import { Cidade } from '../models/cidade.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  getData(){
    let apiUrl = './assets/estados-cidades.json';
    return this.http.get(apiUrl).map((response: Response) => {
        return response.json();
    }).catch((error: Response) => Observable.throw(error));
  }

  constructor(private http : Http) {

  }

}
