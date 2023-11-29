import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";

import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";

import { AdminRoutingModule } from "./admin/admin-routing.module";
import { LoginComponent } from "./admin/autenticacao/login/login.component";
import { NovoProjetoComponent } from "./admin/projetos/novo-projeto/novo-projeto.component";
import { NovoUsuarioComponent } from './admin/usuarios/novo-usuario/novo-usuario.component';
import { ListarUsuariosComponent } from './admin/usuarios/listar-usuarios/listar-usuarios.component';
import { ListarProjetosComponent } from "./admin/projetos/listar-projetos/listar-projetos.component";
import { RecuperarSenhaComponent } from './admin/autenticacao/recuperar-senha/recuperar-senha.component';
import { SecaoAdministrativaComponent } from "./admin/secao-administrativa/secao-administrativa.component";

import { HomeComponent } from './public/home/home.component';
import { MembrosComponent } from './public/membros/membros.component';
import { ListaNoticiasComponent } from './public/lista-noticias/lista-noticias.component';
import { ContatosComponent } from './public/contatos/contatos.component';
import { SobreNosComponent } from './public/sobre-nos/sobre-nos.component';
import { NovoVinculoComponent } from './admin/vinculos/novo-vinculo/novo-vinculo.component';
import { LoaderComponent } from "../shared/components/loader/loader.component";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListAdminComponent } from "../shared/components/list-admin/list-admin.component";


import { ProjetoComponent } from './public/projeto/projeto.component';
import { NoticiaComponent } from './public/noticia/noticia.component';
import { ListaProjetosComponent } from './public/lista-projetos/lista-projetos.component';
import { ListarNoticiasComponent } from "./admin/noticia/listar-noticias/listar-noticias.component";

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
      MembrosComponent,
      SobreNosComponent,
      ContatosComponent,
      NovoVinculoComponent,
      LoaderComponent,
      ListAdminComponent,
      ProjetoComponent,
      NoticiaComponent,
      ListaNoticiasComponent,
      ListarNoticiasComponent,
      ListaProjetosComponent
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
      }),
      MatCardModule,
      //AgmCoreModule.forRoot({ apiKey: 'AIzaSyDarpeNO0XsRILHCG9er6ZKM_s5bYg5Rdg'})
    ],
    exports: [SecaoAdministrativaComponent],
    bootstrap: []
  })
  export class FeatureModule { }