import { CommentService } from './services/comment.service';
import { SortGridPipe } from './diretivas/SortGridPipe.directive';
import { SafePipe } from './diretivas/SafePipe.directive';
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
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { StationContentComponent } from './station-content/station-content.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ResultPagesComponent } from './result-pages/result-pages.component';
import { PostService } from './services/post.service';
import { CommentComponent } from './comment/comment.component';
import { TimeAgoPipe } from './diretivas/time-ago-pipe';
import { StationsMapComponent } from './stations-map/stations-map.component';
import { ComofuncionaComponent } from './comofunciona/comofunciona.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CommentComponent,
    SortGridPipe,
    SafePipe,
    TimeAgoPipe,
    StationsMapComponent,
    ComofuncionaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [UsuarioService, LoginService, PostService, EstacaoService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
