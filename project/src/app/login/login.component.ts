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

  constructor( private loginService: LoginService) { }

  login(){
    this.loginService.login(this.email, this.password);
  }

  ngOnInit() {
    
  }
}
