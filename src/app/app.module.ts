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
<<<<<<< HEAD
=======
import { SucessoAdicaoComponent } from './shared/components/sucesso-adicao/sucesso-adicao.component';

>>>>>>> 4f6fde1a8b552f19a8be6118c93d5165266e7a44
@NgModule({
  declarations: [
    AppComponent,
    PopupAdministrativaComponent,
    SucessoAdicaoComponent
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
