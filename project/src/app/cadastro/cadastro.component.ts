import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Usuario } from '../usuario/usuario.model';
import { Cidade } from '../cadastro/cidade.model'
@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id : number;
  nome : string = "";
  email : string = "";
  password : string = "";
  cidade : string = "";

  constructor(private service : UsuarioService) { }

  ngOnInit() {
  }

  addUsuario(event){
    event.preventDefault();
    this.service.adicionar(new Usuario(this.id, this.nome, this.email, this.password, this.cidade))
    .subscribe(data => {
      console.log(data),
        error => console.log(error)
    });
  }
  selectCidade : Cidade = new Cidade(5, 'Ama');
   cidades = [
     new Cidade(1, 'Crato' ),
     new Cidade(2, 'Fortaleza' ),
     new Cidade(3, 'Quixadá' ),
     new Cidade(4, 'Quixeramobim')
  ];
}
