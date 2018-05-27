import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(private router: Router, private location: Location, protected loginService: LoginService) { }

  ngOnInit() {
      this.location.subscribe((ev:PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });
      this.router.events.subscribe((ev:any) => {
          if (ev instanceof NavigationStart) {
              if (ev.url != this.lastPoppedUrl)
                  this.yScrollStack.push(window.scrollY);
          } else if (ev instanceof NavigationEnd) {
              if (ev.url == this.lastPoppedUrl) {
                  this.lastPoppedUrl = undefined;
                  window.scrollTo(0, this.yScrollStack.pop());
              } else
                  window.scrollTo(0, 0);
          }
      });
      this.loginService.initial();
  }
}
