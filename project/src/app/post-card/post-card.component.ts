import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  
  user = 'Jhonny Sousa';

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
} 

