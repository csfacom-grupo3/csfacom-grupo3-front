import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { CardComponent } from "./components/card/card.component";
import { NavComponent } from './components/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [
        CardComponent,
        NavComponent
    ],
    imports: [
      AppRoutingModule,
      MatToolbarModule
    ],
    exports: [
        CardComponent,
        NavComponent
    ]
  })
  export class CoreModule { }