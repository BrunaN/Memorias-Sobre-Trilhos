import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes=[
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "cadastro", component: CadastroComponent},
    {path: "login", component: LoginComponent}
]
export const routing=RouterModule.forRoot(APP_ROUTES);