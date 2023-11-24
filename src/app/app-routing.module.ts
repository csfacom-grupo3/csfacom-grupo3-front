import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { isLogged } from './core/service/guard/auth.guard';
import { HomeComponent } from './features/public/home/home.component';
import { MembrosComponent } from './features/public/membros/membros.component';
import { ListaProjetosComponent } from './features/public/lista-projetos/lista-projetos.component';
import { ContatosComponent } from './features/public/contatos/contatos.component';
import { ListaNoticiasComponent } from './features/public/lista-noticias/lista-noticias.component';
import { SobreNosComponent } from './features/public/sobre-nos/sobre-nos.component';
import { LoginComponent } from './features/admin/autenticacao/login/login.component';
import { RecuperarSenhaComponent } from './features/admin/autenticacao/recuperar-senha/recuperar-senha.component';

// CRUD de usuários pelo admin
import { ListarUsuariosComponent } from './features/admin/usuarios/listar-usuarios/listar-usuarios.component';
import { NovoUsuarioComponent } from './features/admin/usuarios/novo-usuario/novo-usuario.component';
//import { DeletarUsuarioComponent } from './features/admin/usuarios/deletar-usuario/deletar-usuario.component';
//import { AlterarUsuarioComponent } from './features/admin/usuarios/alterar-usuario/alterar-usuario.component';

// CRUD de notícias pelo admin
import { ListarNoticiasComponent } from './features/admin/noticia/listar-noticias/listar-noticias.component';
import { NovaNoticiaComponent } from './features/admin/noticia/nova-noticia/nova-noticia.component';
//import { AlterarNoticiaComponent } from './features/admin/noticia/alterar-noticia/alterar-noticia.component';
//import { DeletarNoticiaComponent } from './features/admin/noticia/deletar-noticia/deletar-noticia.component';

// CRUD de projetos pelo admin
import { ListarProjetosComponent } from './features/admin/projetos/listar-projetos/listar-projetos.component';
import { NovoProjetoComponent } from './features/admin/projetos/novo-projeto/novo-projeto.component';
// import { DeletarProjetoComponent } from './features/admin/projetos/deletar-projeto/deletar-projeto.component';

// CRUD de vinculos pelo admin
import { ListarVinculosComponent } from './features/admin/vinculos/listar-vinculos/listar-vinculos.component';
import { NovoVinculoComponent } from './features/admin/vinculos/novo-vinculo/novo-vinculo.component';


const routes: Routes = [
  {    
    path : 'login', 
    component: LoginComponent,
    canActivate : [isLogged]
  },
  {
    path : '',
    redirectTo : '/home',
    pathMatch: 'full'
  },
  {
    path:'recuperar-senha',
    component: RecuperarSenhaComponent,
    canActivate : [isLogged]
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'lista-projetos',
    component: ListaProjetosComponent
  },
  {
    path:'lista-noticias',
    component: ListaNoticiasComponent
  },
  {
    path:'membros',
    component: MembrosComponent
  },
  {
    path:'sobrenos',
    component: SobreNosComponent
  },
  {
    path:'contatos',
    component: ContatosComponent
  },

  /////////////////////////////////
  {
    path:'listar-usuarios',
    component: ListarUsuariosComponent,
    canActivate : [isLogged]
  },
  {
    path:'novo-usuario',
    component: NovoUsuarioComponent,
    canActivate : [isLogged]
  },
  /*
  {
    path:'alterar-usuario',
    component: AlterarUsuarioComponent
  },
  {
    path:'deletar-usuario',
    component: DeletarUsuarioComponent
  }
  */
  {
    path:'listar-noticias',
    component: ListarNoticiasComponent
  },
  {
    path:'nova-noticia',
    component: NovaNoticiaComponent
  }, 
    /*
  {
    path:'alterar-noticia',
    component: AlterarNoticiaComponent
  },
  {
    path:'deletar-noticia',
    component: DeletarNoticiaComponent
  }
  */
  {
    path:'listar-projetos',
    component: ListarProjetosComponent
  },
  {
    path:'novo-projeto',
    component: NovoProjetoComponent
  },
  /*
  {
    path:'alterar-projeto',
    component: AlterarProjetoComponent
  },
  {
    path:'deletar-projeto',
    component: DeletarProjetoComponent
  },
  */
  {
    path:'listar-vinculos',
    component: ListarVinculosComponent
  },
  {
    path:'novo-vinculo',
    component: NovoVinculoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
