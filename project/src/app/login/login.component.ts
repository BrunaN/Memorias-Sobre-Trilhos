import { Usuario } from './../models/usuario.model';
import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  user: Usuario;

  constructor( private loginService: LoginService) { }

  login(event){
    event.preventDefault();
    this.loginService.login(this.email, this.password)
                  .subscribe(data =>{
                    this.user = data
                    console.log("usuario= ", this.user);
                    this.loginService.local(this.user);
                    //colocar pra retornar pra página onde o usuário tava antes
                    },
                    error => console.log(error)
                  );
  }

  ngOnInit() {
    
  }
}
