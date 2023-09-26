import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { LoginComponent } from './features/admin/login/login.component';
//import { SecaoAdministrativaComponent } from './features/admin/secao-administrativa/secao-administrativa.component';

const routes: Routes = [
  /* {
    path:"",
    component: SecaoAdministrativaComponent
  },
  {
    path:"/login",
    component: LoginComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
