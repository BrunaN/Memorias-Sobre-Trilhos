import { Post } from './../models/post.model';
import { LoginService } from './login.service';
import { Comment } from './../models/comment.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Usuario } from '../models/usuario.model';

@Injectable()
export class CommentService {

    url: string = 'http://localhost:3000/api/comments'; 

    comments: Comment [] = [];
    
    constructor( private http : Http, protected loginService: LoginService){ };

    insertComment(comment: Comment){
        return this.http.post(this.url, comment)
                        .map((response: Response) => {
                            let res = response.json();
                            let user = this.loginService.user;
                            let comment = new Comment(res._id, user, res.post, res.text);
                            this.comments.push(comment);
                            return comment;
                        })
                        .catch((error: Response) => Observable.throw(error));
    };

    getComments(post: Post){
        return this.http.get('http://localhost:3000/api/post/' + post._id + "/comments")
                        .map((response: Response) => {
                            console.log(response.json())
                            this.comments = [];
                            for(let comment of response.json()){
                                let user = new Usuario(post.user._id, post.user.name, post.user.email, post.user.password)
                                this.comments.push(new Comment(comment._id, user, comment.post, comment.text))
                            }
                            return this.comments
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

}