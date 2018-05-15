import { ProfileComponent } from './profile/profile.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { PostCardComponent } from './post-card/post-card.component';
import { Component } from '@angular/core';

const APP_ROUTES: Routes=[
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "cadastro", component: CadastroComponent},
    {path: "login", component: LoginComponent},

    {path: "redefinir-senha", component: RecoverPasswordComponent},
    {path: "perfil", component: ProfileComponent}
]
export const routing=RouterModule.forRoot(APP_ROUTES);