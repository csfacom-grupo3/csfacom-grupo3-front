import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";

import { MatCardModule } from '@angular/material/card';

import { LoginComponent } from "./admin/autenticacao/login/login.component";
import { AdminRoutingModule } from "./admin/admin-routing.module";
import { NovoProjetoComponent } from "./admin/projetos/novo-projeto/novo-projeto.component";
import { NovoUsuarioComponent } from './admin/usuarios/novo-usuario/novo-usuario.component';
import { RecuperarSenhaComponent } from './admin/autenticacao/recuperar-senha/recuperar-senha.component';
import { ListarUsuariosComponent } from './admin/usuarios/listar-usuarios/listar-usuarios.component';
import { ListarProjetosComponent } from "./admin/projetos/listar-projetos/listar-projetos.component";
import { SecaoAdministrativaComponent } from "./admin/secao-administrativa/secao-administrativa.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { HomeComponent } from './public/home/home.component';
import { NovoVinculoComponent } from './admin/vinculos/novo-vinculo/novo-vinculo.component';
import { LoaderComponent } from "../shared/components/loader/loader.component";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
    declarations: [
      SecaoAdministrativaComponent,
      ListarProjetosComponent,
      NovoProjetoComponent,
      LoginComponent,
      NovoUsuarioComponent,
      ListarUsuariosComponent,
      RecuperarSenhaComponent,
      HomeComponent,
      NovoVinculoComponent,
      LoaderComponent
    ],
    imports: [
      AppRoutingModule,
      CoreModule,      
      ReactiveFormsModule,
      HttpClientModule,
      CommonModule,
      AdminRoutingModule,
      MatCardModule,    
      BrowserAnimationsModule,
      MatFormFieldModule,
      ToastrModule.forRoot({
        timeOut: 10000,
        positionClass: 'toast-top-right',
        progressBar: true,
        closeButton : true          
      })
    ],
    exports: [SecaoAdministrativaComponent],
    bootstrap: []
  })
  export class FeatureModule { }