import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected loginService: LoginService) { }

  withLogin: boolean = false;

  ngOnInit() {
  
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
}
