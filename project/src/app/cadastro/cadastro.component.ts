import { LoginService } from './../services/login.service';
import { DataService } from '../services/data.service';
import { UsuarioService } from '../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Estado } from '../models/estado.model';
import { Usuario } from '../models/usuario.model';
import { Cidade } from '../models/cidade.model';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  cidade: number = -1;
  estado: number = -1;
  avatar;

  estados: Estado[] = [];
  cidades: Cidade[] = [];
  listaCidades: any = [];

  constructor(private service: UsuarioService, private dataService: DataService, private loginService: LoginService, private router: Router, private toastr: ToastrService){
    this.dataService.getData()
      .subscribe(data => {
        for(let i = 0, s = data.estados.length; i < s; i++){
          this.estados.push(new Estado(i, data.estados[i].nome));
          this.listaCidades[i] = [];
          for(let j = 0, s2 = data.estados[i].cidades.length; j < s2; j++){
            this.listaCidades[i].push(new Cidade(j, data.estados[i].cidades[j], i));
          }
        }
      },error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

  onSelect(idEstado){
    if(idEstado < 0) return;
    this.cidades = this.listaCidades[idEstado];
    this.cidade = this.cidades[0].id;
  }


  addUsuario(event){
    event.preventDefault();
    let nomeEstado = this.estados[this.estado].nome;
    let nomeCidade = this.listaCidades[this.estado][this.cidade].nome;
    let usuario = new Usuario(this._id, this.nome, this.email, this.password, this.avatar, nomeEstado, nomeCidade);
    this.service.adicionar(usuario)
            .subscribe(data =>{
              console.log(data);
              this.loginService.local(data);
              let msg = '<div>Que tal editar seu perfil agora?<div><a href="" routerLink="/perfil/'+data._id+'" class="btn btn-success">Ver perfil</a></div></div>';
              this.toastr.success(msg, 'Olá, '+data.name, {
                disableTimeOut: true,
                enableHtml: true
              });
              //this.router.navigate(['/home']);
              },
              error => console.log(error)
            );
  }

}
