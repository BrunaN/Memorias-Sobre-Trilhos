import { ResultPagesComponent } from './result-pages/result-pages.component';
import { SonhoAzulComponent } from './sonho-azul/sonho-azul.component';
import { ProfileComponent } from './profile/profile.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { PostCardComponent } from './post-card/post-card.component';
import { StationContentComponent } from './station-content/station-content.component';
import { ComofuncionaComponent } from './comofunciona/comofunciona.component';
import { Component } from '@angular/core';
import { StationsComponent } from './stations/stations.component';
import { SobreComponent } from './sobre/sobre.component';
import { EquipeComponent } from './equipe/equipe.component';

const APP_ROUTES: Routes=[
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "cadastro", component: CadastroComponent},
    {path: "login", component: LoginComponent},
    {path: "redefinir-senha", component: RecoverPasswordComponent},
    {path: "perfil/:id", component: ProfileComponent},
    {path: "sonho-azul", component: SonhoAzulComponent},
    {path: "resultados", component: ResultPagesComponent},
    {path: "estacao/:id", component: StationContentComponent},
    {path: "comofunciona", component: ComofuncionaComponent},
    {path: "estacoes", component: StationsComponent},
    {path: "sobre", component: SobreComponent},
    {path: "equipe", component: EquipeComponent}
]
export const routing=RouterModule.forRoot(APP_ROUTES);
