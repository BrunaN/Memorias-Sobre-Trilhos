import { LoginService } from './../services/login.service';
import { DataService } from '../services/data.service';
import { UsuarioService } from '../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Estado } from '../models/estado.model';
import { Usuario } from '../models/usuario.model';
import { Cidade } from '../models/cidade.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [DataService, 
              RouterModule]
})

export class CadastroComponent implements OnInit {

  _id: string;
  nome: string = "";
  email: string = "";
  password: string = "";
  avatar;
  // estado: string = ""
  // cidade: string = "";

  estadoSelecionado: Estado = new Estado(0, "Acre");

  estados: Estado[];
  cidades: Cidade[];

  constructor(private service: UsuarioService, private data: DataService, private loginService: LoginService, private router: Router){ 
    this.estados = this.data.getEstados();
  }

  ngOnInit() {
  }

  onSelect(id){
    this.cidades = this.data.getCidades().filter((item)=>item.estadoId==id);
  }

  addUsuario(event){
    event.preventDefault();
    let usuario = new Usuario(this._id, this.nome, this.email, this.password, this.avatar);
    this.service.adicionar(usuario)
            .subscribe(data =>{
              console.log(data);
              this.loginService.local(data);
              this.router.navigate(['/home']);
              //colocar pra retornar pra página onde o usuário tava antes
              },
              error => console.log(error)
            );
  }
  
}
