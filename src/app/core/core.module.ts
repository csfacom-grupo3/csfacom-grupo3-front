import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { CardComponent } from "./components/card/card.component";
import { NavComponent } from './components/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { CardCarrosselComponent } from './components/card-carrossel/card-carrossel.component';

@NgModule({
    declarations: [
        CardComponent,
        NavComponent,
        CardCarrosselComponent
    ],
    imports: [
      AppRoutingModule,
      MatToolbarModule
    ],
    exports: [
        CardComponent,
        NavComponent,
        CardCarrosselComponent
    ]
  })
  export class CoreModule { }