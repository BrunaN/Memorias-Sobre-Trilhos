import { Usuario } from './../models/usuario.model';
import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RouterModule]
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  user: Usuario;

  constructor( private loginService: LoginService, private router: Router) { }

  login(event){
    event.preventDefault();
    this.loginService.login(this.email, this.password)
                  .subscribe(data =>{
                    console.log(data);
                    // this.user = data
                    // this.loginService.local(this.user);
                    this.router.navigate(['/home']);
                    //colocar pra retornar pra página onde o usuário tava antes
                    },
                    error => console.log(error)
                  );
  }

  ngOnInit() {
    
  }
}
