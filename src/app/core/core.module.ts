import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";

import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from "./components/card/card.component";
import { FooterComponent } from './components/footer/footer.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { CardCarrosselComponent } from './components/card-carrossel/card-carrossel.component';

import { CarouselModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardDatailsComponent } from './components/card-datails/card-datails.component';

@NgModule({
    declarations: [
      CardComponent,
      NavComponent,
      CardCarrosselComponent,
      CarrosselComponent,
      FooterComponent,
      CardDatailsComponent
    ],
    imports: [
      AppRoutingModule,
      BrowserAnimationsModule,
      CarouselModule
    ],
    exports: [
      CardComponent,
      NavComponent,
      CardCarrosselComponent,
      CarrosselComponent,
      FooterComponent,
      CardDatailsComponent
    ]
  })
  export class CoreModule { }