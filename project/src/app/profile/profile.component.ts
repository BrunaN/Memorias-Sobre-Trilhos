import { UsuarioService } from './../services/usuario.service';
import { Post } from './../models/post.model';
import { PostService } from './../services/post.service';
import { Estado } from '../models/estado.model';
import { Usuario } from '../models/usuario.model';
import { Cidade } from '../models/cidade.model';
import { LoginService } from '../services/login.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params, RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [DataService,
                RouterModule]
})

export class ProfileComponent implements OnInit {

    user: Usuario;
    posts: Post[] = [];
    flag: boolean = true;

    nome: string = "";
    avatar: File;

    _id: string;

    URL_IMG: string = "http://localhost:3000/uploads/";

    estados: Estado[] = [];
    cidades: Cidade[] = [];
    listaCidades: any = [];
    cidade: number = -1;
    estado: number = -1;

    handleFileInput(event) {
        if(event.target.files.length){
            this.avatar = event.target.files[0];
            //console.log(this.avatar);
        }
    }

    constructor(protected loginService: LoginService, private postService: PostService, private sanitizer: DomSanitizer, private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute, private dataService: DataService, private toastr: ToastrService) {
        this.route.params.subscribe(params => {
          this._id = params['id'];
          usuarioService.getUsuario(this._id)
                      .subscribe(data => {
                        this.user = data;
                        //console.log(this.user);
                        this.posts = [];
                        this.nome = this.user.name;

                        if(this.loginService.user && this.loginService.user._id == this.user._id){
                          this.dataService.getData()
                            .subscribe(data => {
                              for(let i = 0, s = data.estados.length; i < s; i++){
                                if(data.estados[i].nome == this.user.estado){
                                  this.estado = i;
                                }
                                this.estados.push(new Estado(i, data.estados[i].nome));
                                this.listaCidades[i] = [];
                                for(let j = 0, s2 = data.estados[i].cidades.length; j < s2; j++){
                                  if(this.estado == i && data.estados[i].cidades[j] == this.user.cidade){
                                    //console.log(data.estados[i].cidades[j], this.user.cidade);
                                    this.cidade = j;
                                    //console.log(j);
                                  }
                                  this.listaCidades[i].push(new Cidade(j, data.estados[i].cidades[j], i));
                                }
                              }

                              this.cidades = this.listaCidades[this.estado];
                              //console.log(this.cidade);
                          },error => {
                              //console.log(error);
                          });
                        }

                        this.postService.getPostsFromUser(this.user)
                            .subscribe(data => {
                              this.posts = data;
                            }, error => {
                                //console.log(error);
                            });
                      },
                      error => {
                        this.router.navigate(['/home']);
                      });
        });

    }

    safeUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    urlImg() {
        return this.URL_IMG + this.user.avatar;
    }

    ngOnInit() {
    }

    onSelect(idEstado){
      if(idEstado < 0) return;
      this.cidades = this.listaCidades[idEstado];
      this.cidade = this.cidades[0].id;
    }

    atualizarUsuario(e) {
        e.preventDefault();
        let user = this.user;
        user.name = this.nome;
        user.avatar = this.avatar;
        let nomeEstado = this.estados[this.estado].nome;
        let nomeCidade = this.listaCidades[this.estado][this.cidade].nome;
        user.estado = nomeEstado;
        user.cidade = nomeCidade;
        this.usuarioService.update(user)
            .subscribe(data => {
              this.user = data;
              if(this.loginService.user && user._id == this.loginService.user._id){
                this.loginService.local(data);
              }
              this.toastr.success('', 'Seu perfil foi editado com sucesso!', {
                progressBar: true
              });
            },
            error => {
              //console.log(error);
            });
    }

}
