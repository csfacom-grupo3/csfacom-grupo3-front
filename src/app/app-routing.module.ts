import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecaoAdministrativaComponent } from './features/admin/secao-administrativa/secao-administrativa.component';
import { ListarProjetosComponent } from './features/admin/projetos/listar-projetos/listar-projetos.component';
import { NovoProjetoComponent } from './features/admin/projetos/novo-projeto/novo-projeto.component';
import { LoginComponent } from './features/admin/login/login.component';

const routes: Routes = [
  {    
    path : 'login', 
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
