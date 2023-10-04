import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './features/admin/login/login.component';
import { RecuperarSenhaComponent } from './features/admin/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  {    
    path : 'login', 
    component: LoginComponent
  },
  {
    path:'recuperarsenha',
    component: RecuperarSenhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
