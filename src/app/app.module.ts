import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FeatureModule } from './features/features.module';
import { PopupAdministrativaComponent } from './shared/components/popup-administrativa/popup-administrativa.component';
import { InterceptorModule } from './core/service/interceptor/interceptor.module';
import { SucessoAdicaoComponent } from './shared/components/sucesso-adicao/sucesso-adicao.component';
import { ListAdminComponent } from './shared/components/list-admin/list-admin.component';

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
    InterceptorModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
