import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/public/home/home.component';
import { LoginComponent } from './features/admin/autenticacao/login/login.component';
import { RecuperarSenhaComponent } from './features/admin/autenticacao/recuperar-senha/recuperar-senha.component';
import { areLogged } from './core/service/guard/auth.guard';

const routes: Routes = [
  {    
    path : 'login', 
    component: LoginComponent,
    canActivate : [areLogged]
  },
  {
    path : '',
    redirectTo : '/login',
    pathMatch: 'full'
  },
  {
    path:'recuperar-senha',
    component: RecuperarSenhaComponent,
    canActivate : [areLogged]
  },
  {
    path:'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
