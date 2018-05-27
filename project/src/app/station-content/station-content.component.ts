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

  @Input() station: Station;

  _id: string;
  user: Usuario = this.loginService.user;
  content: string = "";
  description: string = "";
  comments: Comment;

  constructor(protected loginService: LoginService, private postService: PostService, private route: ActivatedRoute, private estacaoService: EstacaoService, private router: Router ) {
    this.route.params.subscribe(params => {
      this._id = params['id'];
      estacaoService.getEstacao(this._id).subscribe(
        data => {this.station = data},
        error => {
          this.router.navigate(['/home']);
        });
    });
  }

  ngOnInit() {}

  insert(event){
    event.preventDefault();
    this.postService.insertPost(new Post(this._id, this.user._id, this.station, this.content, this.description, this.comments))
  }

}
