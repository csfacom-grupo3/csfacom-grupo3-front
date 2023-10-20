import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FeatureModule } from './features/features.module';
import { PopupAdministrativaComponent } from './shared/components/popup-administrativa/popup-administrativa.component';
import { InterceptorModule } from './core/service/interceptor/interceptor.module';

@NgModule({
  declarations: [
    AppComponent,
    PopupAdministrativaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    NoopAnimationsModule,
    MatDialogModule,
    CoreModule,
    InterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
