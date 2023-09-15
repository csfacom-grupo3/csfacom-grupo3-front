import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './features/features.module';
import { PopupAdministrativaComponent } from './shared/components/popup-administrativa/popup-administrativa.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupAdministrativaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
