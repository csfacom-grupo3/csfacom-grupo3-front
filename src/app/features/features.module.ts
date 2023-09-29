import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { SecaoAdministrativaComponent } from "./admin/secao-administrativa/secao-administrativa.component";
import { CoreModule } from "../core/core.module";
import { AdminRoutingModule } from "./admin/admin-routing.module";
import { ListarProjetosComponent } from "./admin/projetos/listar-projetos/listar-projetos.component";
import { NovoProjetoComponent } from "./admin/projetos/novo-projeto/novo-projeto.component";
import { LoginComponent } from "./admin/login/login.component";
import { MatCardModule } from '@angular/material/card';
import { NovoUsuarioComponent } from './admin/usuarios/novo-usuario/novo-usuario.component';
import { ListarUsuariosComponent } from './admin/usuarios/listar-usuarios/listar-usuarios.component';


@NgModule({
    declarations: [
      SecaoAdministrativaComponent,
      ListarProjetosComponent,
      NovoProjetoComponent,
      LoginComponent,
      NovoUsuarioComponent,
      ListarUsuariosComponent
    ],
    imports: [
      AppRoutingModule,
      CoreModule,
      AdminRoutingModule,
      MatCardModule
    ],
    exports: [SecaoAdministrativaComponent],
    bootstrap: []
  })
  export class FeatureModule { }