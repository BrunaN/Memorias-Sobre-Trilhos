import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuario/usuario.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  editarPerfil: boolean = false;

  editar(){
    this.editarPerfil = true;
  }

  concluir(){

  }
}
