import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FeatureModule } from './features/features.module';
import { PopupAdministrativaComponent } from './shared/components/popup-administrativa/popup-administrativa.component';
import { InterceptorModule } from './core/service/interceptor/interceptor.module';
import { SucessoAdicaoComponent } from './shared/components/sucesso-adicao/sucesso-adicao.component';
import { ListAdminComponent } from './shared/components/list-admin/list-admin.component';
import { NoticiaComponent } from './feature/public/noticia/noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupAdministrativaComponent,
    SucessoAdicaoComponent,
    NoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    NoopAnimationsModule,
    MatDialogModule,
    CoreModule,
    InterceptorModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
