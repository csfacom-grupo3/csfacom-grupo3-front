import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecaoAdministrativaComponent } from './secao-administrativa/secao-administrativa.component';
import { ListarProjetosComponent } from './projetos/listar-projetos/listar-projetos.component';
import { NovoProjetoComponent } from './projetos/novo-projeto/novo-projeto.component';
import { ListarUsuariosComponent } from './usuarios/listar-usuarios/listar-usuarios.component';
import { NovoUsuarioComponent } from './usuarios/novo-usuario/novo-usuario.component';

const routes: Routes = [
  {path : 'secao-administrativa', component : SecaoAdministrativaComponent},
  {path : 'secao-administrativa/listar-projetos', component : ListarProjetosComponent},
  {path: 'secao-administrativa/novo-projeto', component: NovoProjetoComponent},
  {path: 'secao-administrativa/listar-usuarios', component: ListarUsuariosComponent},
  {path: 'secao-administrativa/novo-usuario', component: NovoUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }