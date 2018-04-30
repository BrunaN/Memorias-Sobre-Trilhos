import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioService } from './usuario.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { StationContentComponent } from './station-content/station-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    UsuarioComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    LoginComponent,
    StationContentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
    
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }