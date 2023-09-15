import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { SecaoAdministrativaComponent } from "./admin/secao-administrativa/secao-administrativa.component";
import { CoreModule } from "../core/core.module";
import { AdminRoutingModule } from "./admin/admin-routing.module";
import { ListarProjetosComponent } from "./admin/projetos/listar-projetos/listar-projetos.component";
import { NovoProjetoComponent } from "./admin/projetos/novo-projeto/novo-projeto.component";

@NgModule({
    declarations: [
      SecaoAdministrativaComponent,
      ListarProjetosComponent,
      NovoProjetoComponent
    ],
    imports: [
      AppRoutingModule,
      CoreModule,
      AdminRoutingModule
    ],
    exports: [SecaoAdministrativaComponent],
    bootstrap: []
  })
  export class FeatureModule { }