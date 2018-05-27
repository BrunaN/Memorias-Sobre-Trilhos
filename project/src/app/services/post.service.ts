import { Post } from './../models/post.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Usuario } from '../models/usuario.model';

@Injectable()
export class PostService {

    url: string = 'http://localhost:3000/api/users';

    constructor( private http : Http){ };

    posts: Post [] = [];

    insertPost(post: Post){
        return this.http.post(this.url, post)
                        .map((rasponse: Response) => {
                            this.posts.push(post);
                        })
                        .catch((error: Response) => Observable.throw(error));
    };

    getPost(){
        return this.http.get(this.url)
                        .map((response: Response) => {
                            this.posts = [];
                            for(let post of response.json()){
                                this.posts.push(new Post(post._id, post.user, post.station, post.content, post.description, post.comments))
                            }
                            return this.posts
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

}