import { Usuario } from './../models/usuario.model';
import { CommentService } from './../services/comment.service';
import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { NgModel } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post: Post;
  comments: Comment [] = [];

  repoUrl = 'https://facebook.com/';

  user: Usuario = this.loginService.user;
  text: string = "";

  request: boolean = false;

  constructor(private postService: PostService, private commentService: CommentService, protected loginService: LoginService) { }

  ngOnInit() {
  }

  insert(e){
    e.preventDefault();
    let _id: string;
    this.commentService.insertComment(new Comment(_id, this.user, this.post._id, this.text))
                    .subscribe(data => {
                      console.log(data);
                      this.text = "";
                    },
                      error => {
                      console.log(error);
                    });
  }

  comentario = {
    "comentar-display": true
  }

  get(){
    this.comments = [];
    this.commentService.getComments(this.post)
                      .subscribe(data => {
                        console.log(data);
                        this.comments = data;
                        console.log(this.comments);
                      },
                        error => {
                        console.log(error);
                      });
  }

  comentar(e){
    e.preventDefault();

    if(!this.request){
      this.get();
      this.request = true;
    }

    this.comentario["comentar-display"] = !this.comentario["comentar-display"];
  }

}
