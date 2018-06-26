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
    urlPostsFromUser: string = 'http://localhost:3000/api/user/';

    constructor( private http : Http, protected loginService : LoginService){ };

    posts: Post [] = [];
    likes: Usuario [] = [];

    insertPost(post: Post){
        let formData = new FormData();
        if (post.content) {
          formData.append('content', post.content);
        }

        for ( let key in post ) {
          if(key != 'content' && post[key]){
            console.log(key, post[key]);
            formData.append(key, post[key]);
          }
        }

        return this.http.post(this.url, formData)
                        .map((response: Response) => {
                            let res = response.json();
                            let user = this.loginService.user;
                            let post = new Post(res._id, user, res.station, res.content, res.video, res.description, res.date, res.likes);
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
                                let user = new Usuario(post.user._id, post.user.name, post.user.email, post.user.password, post.user.avatar, post.user.estado, post.user.cidade);
                                this.posts.push(new Post(post._id, user, station, post.content, post.video, post.description, post.date, post.likes))
                            }
                            return this.posts
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

    getPostsFromUser(user: Usuario){
        return this.http.get(this.urlPostsFromUser + user._id + "/posts")
                        .map((response: Response) => {
                            console.log(response);
                            this.posts = [];
                            for(let post of response.json()){
                                this.posts.push(new Post(post._id, user, post.station, post.content, post.video, post.description, post.date, post.likes))
                            }
                            return this.posts
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

    getUsersLikes(post: Post){
        return this.http.get(this.url + "/" + post._id + "/likes")
                        .map((response: Response) => {
                            console.log(response);
                            // this.likes = [];
                            // for(let post of response.json()){
                            //     let user = new Usuario(post.user._id, post.user.name, post.user.email, post.user.password);
                            //     this.likes.push(user);
                            // }
                            // return this.likes
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

    updatePost(post: Post){
        return this.http.put((this.url + "/" + post._id), post)
                        .map((response: Response) => {
                            console.log(response);
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

    likePost(post: Post, user: Usuario){
        return this.http.put((this.url + "/" + post._id + "/like"), {user: user})
                        .map((response: Response) => {
                            let res = response.json();
                            let post = new Post(res._id, res.user, res.station, res.content, res.video, res.description, res.date, res.likes);
                            console.log(post);
                            return post;
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

    removePost(post:Post, user: Usuario){
        return this.http.delete((this.url + "/" + post._id + "?user="+ user._id))
                        .map((response: Response) => {
                            let res = response.json();
                            for(let i=0; i<this.posts.length; i++){
                                if(this.posts[i]._id == post._id){
                                    this.posts.splice(i, 1)
                                }
                            }
                            return this.posts;
                        })
                        .catch((error: Response) => Observable.throw(error));
    }

}
