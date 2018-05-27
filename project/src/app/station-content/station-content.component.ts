import { NgModel } from '@angular/forms';
import { Station } from './../models/station.model';
import { LoginService } from '../services/login.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-station-content',
  templateUrl: './station-content.component.html',
  styleUrls: ['./station-content.component.css']
})
export class StationContentComponent implements OnInit {

  @Input() station: Station;

  descriptionInput: string = "";

  constructor(protected loginService: LoginService) { }

  ngOnInit() {
  }

}
