import { HeaderComponent } from './header/header.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes=[
    {path: "", redirectTo: "/header", pathMatch: "full"},
    {path: "header", component: HeaderComponent},
    {path: "cadastro", component: CadastroComponent},
    {path: "usuario", component: UsuarioComponent},

]
export const routing=RouterModule.forRoot(APP_ROUTES);