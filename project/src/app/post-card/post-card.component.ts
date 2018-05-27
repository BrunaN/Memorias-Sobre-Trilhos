import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  
  comentario = {
    "comentar-display": true
  }

  comentar(e){
    e.preventDefault()
    if(this.comentario["comentar-display"] == true){
      this.comentario['comentar-display']=false;
    }else{
      this.comentario['comentar-display']=true;
    }
  }
  
  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }
} 

