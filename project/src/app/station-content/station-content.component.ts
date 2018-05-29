import { PostService } from './../services/post.service';
import { Comment } from './../models/comment.model';
import { Usuario } from './../models/usuario.model';
import { NgModel } from '@angular/forms';
import { Station } from './../models/station.model';
import { LoginService } from '../services/login.service';
import { EstacaoService } from '../services/estacao.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { Router, ActivatedRoute, Params, RouterModule } from '@angular/router';


@Component({
  selector: 'app-station-content',
  templateUrl: './station-content.component.html',
  styleUrls: ['./station-content.component.css'],
  providers:[RouterModule]
})

export class StationContentComponent implements OnInit {

  station : Station = new Station("","","","","","");

  _id: string;
  _idPost: string;
  user: Usuario = this.loginService.user;
  content: string = "";
  description: string = "";
  comments: Comment;

  posts: Post [] = [];

  constructor(protected loginService: LoginService, private postService: PostService, private route: ActivatedRoute, private estacaoService: EstacaoService, private router: Router ) {
    this.route.params.subscribe(params => {
      this._id = params['id'];
      estacaoService.getEstacao(this._id)
                .subscribe(data => {
                  this.station = data;
                  this.posts = [];
                  this.postService.getPosts(this.station)
                                .subscribe(data => {
                                  this.posts = data;},
                                  error => {
                                  console.log(error);
                                });
                },
                  error => {
                  this.router.navigate(['/home']);
                });
    });

  }

  ngOnInit() {
  }

  insert(event){
    event.preventDefault();
    let post = new Post(this._idPost, this.user._id, this.station._id, this.content, this.description, new Date());
    this.postService.insertPost(post)
                .subscribe(data => {
                  console.log(data);
                  this.content = "";
                  this.description = "";
                },
                  error => {
                  console.log(error);
                });
  }

}
