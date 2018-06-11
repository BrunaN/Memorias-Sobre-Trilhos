import { Post } from './../models/post.model';
import { PostService } from './../services/post.service';
import { Usuario } from './../models/usuario.model';
import { LoginService } from '../services/login.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

    constructor(protected loginService: LoginService, private postService: PostService) { 
        this.posts = [];

        this.postService.getPostsFromUser(this.user)
            .subscribe(data => {
                this.posts = data;
            }, error => {
                console.log(error);
            });
    }

    user: Usuario = this.loginService.user;
    posts: Post[] = [];

    ngOnInit() {
        this.user = this.loginService.user;

    }

    editarPerfil = false;

    editar() {
        this.editarPerfil = true;
    }

}