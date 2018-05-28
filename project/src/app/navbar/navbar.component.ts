import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Usuario;

  constructor(protected loginService: LoginService) { }

  ngOnInit() {
    this.user = this.loginService.user;
  }
  
  dropdown = {
    "dropdown-display": true,
  }
  
  dropdownToggle(e){
    e.preventDefault();
    if(this.dropdown["dropdown-display"] == true){
      this.dropdown['dropdown-display']=false;
    }else{
      this.dropdown['dropdown-display']=true;
    }
  }

  logout(e){
    e.preventDefault();
    this.loginService.logout();
  }
}
