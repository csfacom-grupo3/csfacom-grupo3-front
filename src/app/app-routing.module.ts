import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { isLogged } from './core/service/guard/auth.guard';
import { HomeComponent } from './features/public/home/home.component';
import { MembrosComponent } from './features/public/membros/membros.component';
import { ListaProjetosComponent } from './features/public/lista-projetos/lista-projetos.component';
import { ContatosComponent } from './features/public/contatos/contatos.component';
import { ListaNoticiasComponent } from './features/public/lista-noticias/lista-noticias.component';
import { SobreNosComponent } from './features/public/sobre-nos/sobre-nos.component';
import { LoginComponent } from './features/admin/autenticacao/login/login.component';
import { RecuperarSenhaComponent } from './features/admin/autenticacao/recuperar-senha/recuperar-senha.component';


const routes: Routes = [
  {    
    path : 'login', 
    component: LoginComponent,
    canActivate : [isLogged]
  },
  {
    path : '',
    redirectTo : '/home',
    pathMatch: 'full'
  },
  {
    path:'recuperar-senha',
    component: RecuperarSenhaComponent,
    canActivate : [isLogged]
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'lista-projetos',
    component: ListaProjetosComponent
  },
  {
    path:'lista-noticias',
    component: ListaNoticiasComponent
  },
  {
    path:'membros',
    component: MembrosComponent
  },
  {
    path:'sobrenos',
    component: SobreNosComponent
  },
  {
    path:'contatos',
    component: ContatosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
