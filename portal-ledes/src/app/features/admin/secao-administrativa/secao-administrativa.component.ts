import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/shared/class/card';
import { PopupAdministrativaComponent } from 'src/app/shared/components/popup-administrativa/popup-administrativa.component';

@Component({
  selector: 'app-secao-administrativa',
  templateUrl: './secao-administrativa.component.html',
  styleUrls: ['./secao-administrativa.component.css']
})
export class SecaoAdministrativaComponent {
  constructor(public dialog: MatDialog) {}

  cards : Card[] = [
    {
      Nome : "Projetos",
      Icon : "../../../../assets/icons/engrenagens.svg",
      rotaListar : "caminho do listar",
      rotaNovo: "caminho do novo"
    },
    {
      Nome : "Usuários",
      Icon : "../../../../assets/icons/user.svg",
      rotaListar : "caminho do listar",
      rotaNovo: "caminho do novo"
    },
    {
      Nome : "Notícias",
      Icon : "../../../../assets/icons/noticia.svg",
      rotaListar : "caminho do listar",
      rotaNovo: "caminho do novo"
    },
    {
      Nome : "Contatos",
      Icon : "../../../../assets/icons/contatos.svg",
      rotaListar : "caminho do listar",
      rotaNovo: "caminho do novo"
    },
    {
      Nome : "Sobre nós",
      Icon : "../../../../assets/icons/sobre-nos.svg",
      rotaListar : "caminho do listar",
      rotaNovo: "caminho do novo"
    },
  ]

  abrirModal(){
      const dialogRef = this.dialog.open(PopupAdministrativaComponent, {
        height: '60%',
        width: '50%',
        data :{
          listar: "Listar projetos",
          novo : "Cadastrar novo projeto"
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }

}
