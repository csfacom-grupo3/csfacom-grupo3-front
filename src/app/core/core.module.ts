import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { CardComponent } from "./components/card/card.component";

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
      AppRoutingModule
    ],
    exports: [
        CardComponent
    ]
  })
  export class CoreModule { }