import { CommentService } from './services/comment.service';
import { LoginService } from './services/login.service';
import { EstacaoService } from './services/estacao.service';
import { SonhoAzulComponent } from './sonho-azul/sonho-azul.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioService } from './services/usuario.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CeiboShare } from 'ng2-social-share';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { StationContentComponent } from './station-content/station-content.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ResultPagesComponent } from './result-pages/result-pages.component';
import { PostService } from './services/post.service';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    LoginComponent,
    StationContentComponent,
    RecoverPasswordComponent,
    PostCardComponent,
    SonhoAzulComponent,
    ResultPagesComponent,
    CeiboShare,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [UsuarioService, LoginService, PostService, EstacaoService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
