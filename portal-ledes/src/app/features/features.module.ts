import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { SecaoAdministrativaComponent } from "./admin/secao-administrativa/secao-administrativa.component";

@NgModule({
    declarations: [
      SecaoAdministrativaComponent
    ],
    imports: [
      AppRoutingModule
    ],
    exports: [SecaoAdministrativaComponent],
    bootstrap: []
  })
  export class FeatureModule { }