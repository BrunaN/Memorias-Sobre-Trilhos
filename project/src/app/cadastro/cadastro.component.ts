import { DataService } from './../data.service';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Estado } from './estado.model';
import { Usuario } from '../usuario/usuario.model';
import { Cidade } from '../cadastro/cidade.model'

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

  input1Error : boolean = true;

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
  
  validar(){
    if(this.nome == ""){
      this.input1Error = true;
    }else{
      this.input1Error = false;
    }
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
