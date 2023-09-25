import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { SecaoAdministrativaComponent } from "./admin/secao-administrativa/secao-administrativa.component";
import { CoreModule } from "../core/core.module";

@NgModule({
    declarations: [
      SecaoAdministrativaComponent
    ],
    imports: [
      AppRoutingModule,
      CoreModule
    ],
    exports: [
      SecaoAdministrativaComponent
    ],
    bootstrap: []
  })
  export class FeatureModule { }