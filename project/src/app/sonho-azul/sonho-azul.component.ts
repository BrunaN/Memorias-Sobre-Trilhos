import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sonho-azul',
  templateUrl: './sonho-azul.component.html',
  styleUrls: ['./sonho-azul.component.css']
})
export class SonhoAzulComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dropdown_filtro = {
    "dropdown-display": true
  }

  aparecer(event) {
    event.preventDefault();
    if (this.dropdown_filtro["dropdown-display"] == true) {
      this.dropdown_filtro["dropdown-display"] = false;
    } else {
      this.dropdown_filtro["dropdown-display"] = true;
    }

  }
  dropdown_opcoes= {
    "dropdown-display": true
  }
  aparecerOpcoes(event) {
    event.preventDefault();
    if (this.dropdown_opcoes["dropdown-display"] == true) {
      this.dropdown_opcoes["dropdown-display"] = false;
    } else {
      this.dropdown_opcoes["dropdown-display"] = true;
    }
  }
}
