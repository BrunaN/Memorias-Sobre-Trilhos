import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  dropdown = {
    "dropdown-display": true
  }
  
  dropdownToggle(e){
    e.preventDefault();
    if(this.dropdown["dropdown-display"] == true){
      this.dropdown["dropdown-display"]=false;
    }else{
      this.dropdown["dropdown-display"]=true;
    }
  }
}
