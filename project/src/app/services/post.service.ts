import { LoginService } from './login.service';
import { Post } from './../models/post.model';
import { Station } from './../models/station.model';
import { Usuario } from '../models/usuario.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {

    url: string = 'http://localhost:3000/api/posts';
    urlPostsFromStation: string = 'http://localhost:3000/api/stations/';


    constructor( private http : Http, protected loginService : LoginService){ };

    posts: Post [] = [];

    insertPost(post: Post){
        return this.http.post(this.url, post)
                        .map((response: Response) => {
                            let res = response.json();
                            let user = this.loginService.user;
                            console.log(user);
                            let post = new Post(res._id, user, res.station, res.content, res.description, res.date);
                            this.posts.push(post);
                            return post;
                        })
                        .catch((error: Response) => Observable.throw(error));
    };

    getPosts(station: Station){
        return this.http.get(this.urlPostsFromStation + station._id + "/posts")
                        .map((response: Response) => {
                            console.log(response);
                            this.posts = [];
                            for(let post of response.json()){
                                let user = new Usuario(post.user._id, post.user.name, post.user.email, post.user.password);
                                this.posts.push(new Post(post._id, user, post.station, post.content, post.description, post.date))
                            }
                            return this.posts
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

}
