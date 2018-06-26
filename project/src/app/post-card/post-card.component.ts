import { UsuarioService } from './../services/usuario.service';
import { Usuario } from './../models/usuario.model';
import { CommentService } from './../services/comment.service';
import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { NgModel } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Comment } from '../models/comment.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;
  @Input() station: boolean = false;
  comments: Comment [] = [];

  repoUrl = 'https://facebook.com/';

  user: Usuario = undefined;
  text: string = "";
  likes;
  URL_IMG: string = "http://localhost:3000/uploads/";

  deuLike: boolean = false;
  request: boolean = false;

  comentario = {
    "comentar-display": true
  };

  postBorder = {
    "comentar-border": false
  };

  constructor(private postService: PostService, private commentService: CommentService, protected loginService: LoginService,  private sanitizer: DomSanitizer, private usuarioService: UsuarioService, private router: Router) {
  }

  safeUrl(url){
    url = url.replace("watch?v=", "embed/");
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  urlImg(){
    return this.URL_IMG+this.post.content;
  }

  urlImgAvatar(){
    return this.URL_IMG+this.post.user.avatar;
  }

  ngOnInit() {
    this.deuLike = this.liked();
  }

  insert(e){
    e.preventDefault();
    let _id: string;
    this.commentService.insertComment(new Comment(_id, this.loginService.user, this.post._id, this.text, new Date(), this.likes))
                    .subscribe(data => {
                      console.log(data);
                      this.text = "";
                    },
                      error => {
                      //console.log(error);
                    });
  }

  get(){
    this.comments = [];
    this.commentService.getComments(this.post)
                      .subscribe(data => {
                        //console.log(data);
                        this.comments = data;
                        //console.log(this.comments);
                        this.request = true;
                      },
                        error => {
                        //console.log(error);
                        this.request = true;
                      });
  }

  comentar(e){
    e.preventDefault();

    //console.log(this.request);

    if(!this.request){
      this.get();
    }

    this.comentario["comentar-display"] = !this.comentario["comentar-display"];

    if(this.postBorder["comentar-border"] == false && this.comentario["comentar-display"] == false){
      this.postBorder["comentar-border"] = true;
    }else{
      this.postBorder["comentar-border"] = false
    }
  }

  liked(){
    if(!this.loginService.user){
      return false;
    }
    for(let i=0; i<this.post.likes.length; i++){
      if(this.post.likes[i]==this.loginService.user._id){
        return true;
      }
    }
    return false;
  }

  like(e){
    e.preventDefault();
    this.postService.likePost(this.post, this.loginService.user)
                .subscribe(data => {
                  this.post = data;
                  this.deuLike = this.liked();
                  //console.log(this.deuLike);
                },
                  error => {
                  //console.log(error);
                });
  }

  remove(e){
    e.preventDefault();
    this.postService.removePost(this.post, this.loginService.user)
                .subscribe(data => {
                  //console.log(data);
                },
                  error => {
                  //console.log(error);
                });
  }

  usersLikes(e){
    e.preventDefault();
    this.postService.getUsersLikes(this.post)
                .subscribe(data => {
                  //console.log(data);
                },
                  error => {
                  //console.log(error);
                });
  }

  userProfile(){
    this.usuarioService.getUsuario(this.post.user)
                      .subscribe(data => {

                        //console.log(data);
                      },
                        error => {
                        //console.log(error);
                      });
  }

}
