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
                            let comment = new Comment(res._id, user, res.post, res.text, res.date, res.likes);
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
                                let user = new Usuario(comment.user._id, comment.user.name, comment.user.email, comment.user.password, comment.user.avatar, comment.user.estado, comment.user.cidade);
                                this.comments.push(new Comment(comment._id, user, comment.post, comment.text, comment.date, comment.likes));
                            }
                            return this.comments
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

    likeComment(comment: Comment, user: Usuario){
        return this.http.put((this.url + "/" + comment._id + "/like"), {user: user})
                        .map((response: Response) => {
                            let res = response.json();
                            let comment = new Comment(res._id, res.user, res.post, res.text, res.date, res.likes);
                            console.log(comment);
                            return comment;
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

    removeComment(comment: Comment, user: Usuario){
        return this.http.delete((this.url + "/" + comment._id + "?user="+ user._id))
                        .map((response: Response) => {
                            let res = response.json();
                            for(let i=0; i<this.comments.length; i++){
                                if(this.comments[i]._id == comment._id){
                                    this.comments.splice(i, 1)
                                }
                            }
                            return this.comments;
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

}
