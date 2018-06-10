import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editarPerfil = false;

  editar() {
    this.editarPerfil = true;
  }

  concluir() {

  }
}