import { UsuarioService } from './../services/usuario.service';
import { Post } from './../models/post.model';
import { PostService } from './../services/post.service';
import { Usuario } from './../models/usuario.model';
import { LoginService } from '../services/login.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

    user: Usuario = this.loginService.user;
    posts: Post[] = [];

    nome: string = "";
    avatar: File;

    URL_IMG: string = "http://localhost:3000/uploads/";

    handleFileInput(event) {
        if(event.target.files.length){
            this.avatar = event.target.files[0];
            console.log(this.avatar);
        }
    }

    constructor(protected loginService: LoginService, private postService: PostService, private sanitizer: DomSanitizer, private usuarioService: UsuarioService) {
        this.posts = [];

        this.postService.getPostsFromUser(this.user)
            .subscribe(data => {
                this.posts = data;
            }, error => {
                console.log(error);
            });
    }

    safeUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    urlImg() {
        return this.URL_IMG + this.user.avatar;
    }

    ngOnInit() {
        this.user = this.loginService.user;
    }

    atualizarUsuario(e) {
        e.preventDefault();
        this.user.name = this.nome;
        this.user.avatar = this.avatar;
        console.log(this.user)
        this.usuarioService.update(this.user)
                            .subscribe(data => {
                                console.log(data);
                                this.user = data;
                                this.loginService.local(data);
                            },
                                error => {
                                    console.log(error);
                                });
    }

}