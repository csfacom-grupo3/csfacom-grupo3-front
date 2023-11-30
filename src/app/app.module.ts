import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FeatureModule } from './features/features.module';
import { PopupAdministrativaComponent } from './shared/components/popup-administrativa/popup-administrativa.component';
import { InterceptorModule } from './core/service/interceptor/interceptor.module';
import { SucessoAdicaoComponent } from './shared/components/sucesso-adicao/sucesso-adicao.component';
import { NoticiaComponent } from './feature/public/noticia/noticia.component';
import { AlterarUsuarioComponent } from './features/admin/usuarios/alterar-usuario/alterar-usuario.component';
import { AlterarProjetosComponent } from './features/admin/projetos/alterar-projeto/alterar-projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupAdministrativaComponent,
    SucessoAdicaoComponent,
    NoticiaComponent,
    AlterarUsuarioComponent,
    AlterarProjetosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatListModule,
    CoreModule,
    InterceptorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
