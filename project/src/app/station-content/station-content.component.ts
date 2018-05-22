import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-content',
  templateUrl: './station-content.component.html',
  styleUrls: ['./station-content.component.css']
})
export class StationContentComponent implements OnInit {

  constructor( protected loginService: LoginService) { }

  ngOnInit() {
  }

}
