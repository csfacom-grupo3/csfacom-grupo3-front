import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecaoAdministrativaComponent } from './features/admin/secao-administrativa/secao-administrativa.component';
import { ListarProjetosComponent } from './features/admin/projetos/listar-projetos/listar-projetos.component';
import { NovoProjetoComponent } from './features/admin/projetos/novo-projeto/novo-projeto.component';

const routes: Routes = [
  // {    
  //   path : 'secao-administrativa', 
  //   loadChildren: () => import('./features/features.module').then(m => m.FeatureModule)
  // },
  // {path : '', redirectTo: '/secao-administrativa', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
