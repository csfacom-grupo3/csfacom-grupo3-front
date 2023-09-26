import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/shared/class/card';
import { PopupAdministrativo } from 'src/app/shared/class/popup-administrativo';
import { PopupAdministrativaComponent } from 'src/app/shared/components/popup-administrativa/popup-administrativa.component';

@Component({
  selector: 'app-secao-administrativa',
  templateUrl: './secao-administrativa.component.html',
  styleUrls: ['./secao-administrativa.component.css']
})
export class SecaoAdministrativaComponent {
  constructor(public dialog: MatDialog) {}

  popups : PopupAdministrativo[] = [
    {
      titulo : "PROJETOS",
      novo : "Cadastrar novo projeto",
      listar : "Listar projetos",
      rotaListar : "/secao-administrativa/listar-projetos",
      rotaNovo: "/secao-administrativa/novo-projeto"
    },
    {
      titulo : "USUÁRIOS",
      novo : "Cadastrar novo usuário",
      listar : "Listar usuários",
      rotaListar : "/secao-administrativa/listar-usuarios",
      rotaNovo: "/secao-administrativa/novo-usuario"
    },
    {
      titulo : "NOTÍCIAS",
      novo : "Nova notícia",
      listar : "Listar notícias",
      rotaListar : "/secao-administrativa/listar-noticias",
      rotaNovo: "/secao-administrativa/nova-noticia"
    },
    {
      titulo : "CONTATOS",
      novo : "",
      listar : "",
      rotaListar : "caminho do listar",
      rotaNovo: "caminho do novo"
    },
    {
      titulo : "SOBRE NÓS",
      novo : "",
      listar : "",
      rotaListar : "caminho do listar",
      rotaNovo: "caminho do novo"
    },
  ]

  abrirModal(id: number){
    const dialogRef = this.dialog.open(PopupAdministrativaComponent, {
      height: '60%',
      width: '50%',
      data :{
        titulo: this.popups[id].titulo,
        listar: this.popups[id].listar,
        novo : this.popups[id].novo,
        rotaListar: this.popups[id].rotaListar,
        rotaNovo: this.popups[id].rotaNovo,

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
