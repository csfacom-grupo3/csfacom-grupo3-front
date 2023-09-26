import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { AppRoutingModule } from "../app-routing.module";

import {MatCardModule} from '@angular/material/card';

import { LoginComponent } from './admin/login/login.component';
import { NavComponent } from '../core/components/nav/nav.component';
import { SecaoAdministrativaComponent } from "./admin/secao-administrativa/secao-administrativa.component";

@NgModule({
    declarations: [
      SecaoAdministrativaComponent,
      LoginComponent
    ],
    imports: [
      AppRoutingModule,
      CoreModule,
      MatCardModule
    ],
    exports: [
      SecaoAdministrativaComponent,
      NavComponent,
      LoginComponent
    ],
    bootstrap: []
  })
  export class FeatureModule { }