import { DataService } from '../services/data.service';
import { UsuarioService } from '../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Estado } from '../models/estado.model';
import { Usuario } from '../models/usuario.model';
import { Cidade } from '../models/cidade.model'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [DataService]
})

export class CadastroComponent implements OnInit {

  id: number;
  nome: string = "";
  email: string = "";
  password: string = "";
  estado: string = ""
  cidade: string = "";

  estadoSelecionado: Estado = new Estado(0, "Acre");

  estados: Estado[];
  cidades: Cidade[];

  constructor(private service : UsuarioService, private data : DataService) { 
    this.estados = this.data.getEstados();
  }

  onSelect(id){
    this.cidades = this.data.getCidades().filter((item)=>item.estadoId==id);
  }

  ngOnInit() {
  }
  
  addUsuario(event){
    event.preventDefault();
    this.service.adicionar(new Usuario(this.id, this.nome, this.email, this.password, this.estado, this.cidade))
    .subscribe(data => {
      console.log(data),
      error => console.log(error)
    });
  }
  
}
