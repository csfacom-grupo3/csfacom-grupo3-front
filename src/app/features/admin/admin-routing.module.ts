import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecaoAdministrativaComponent } from './secao-administrativa/secao-administrativa.component';
import { ListarProjetosComponent } from './projetos/listar-projetos/listar-projetos.component';
import { NovoProjetoComponent } from './projetos/novo-projeto/novo-projeto.component';
import { ListarUsuariosComponent } from './usuarios/listar-usuarios/listar-usuarios.component';
import { NovoUsuarioComponent } from './usuarios/novo-usuario/novo-usuario.component';
import { authGuard } from '../../core/service/guard/auth.guard';
import { DeletarUsuarioComponent } from './usuarios/deletar-usuario/deletar-usuario.component';
import { ListarNoticiasComponent } from './noticia/listar-noticias/listar-noticias.component';
import { NovaNoticiaComponent } from './noticia/nova-noticia/nova-noticia.component';
import { AlterarUsuarioComponent } from './usuarios/alterar-usuario/alterar-usuario.component';
import { AlterarProjetosComponent } from './projetos/alterar-projeto/alterar-projeto.component';

const routes: Routes = [
  {
    path: 'secao-administrativa', 
    component: SecaoAdministrativaComponent,
    canActivate : [authGuard]
  },
  {
    path: 'secao-administrativa/listar-projetos', 
    component: ListarProjetosComponent,
    canActivate : [authGuard]
  },
  {
    path: 'secao-administrativa/novo-projeto', 
    component: NovoProjetoComponent,
    canActivate : [authGuard]
  },
  {
    path: 'secao-administrativa/alterar-projeto/:id', 
    component: AlterarProjetosComponent,
    canActivate : [authGuard]
  },
  {
    path: 'secao-administrativa/listar-usuarios', 
    component: ListarUsuariosComponent,
    canActivate : [authGuard]
  },
  {
    path: 'secao-administrativa/novo-usuario', 
    component: NovoUsuarioComponent,
    canActivate : [authGuard]
  },
  {
    path: 'secao-administrativa/alterar-usuario/:id', 
    component: AlterarUsuarioComponent,
    canActivate : [authGuard]
  },
  {
    path:'secao-administrativa/deletar-usuario/:id',
    component: DeletarUsuarioComponent,
    canActivate : [authGuard]
  },
  {
    path: 'secao-administrativa/listar-noticias', 
    component: ListarNoticiasComponent,
    canActivate : [authGuard]
  },
  {
    path: 'secao-administrativa/nova-noticia', 
    component: NovaNoticiaComponent,
    canActivate : [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }