import { Component } from '@angular/core';
import { Card } from 'src/app/shared/class/card';

@Component({
  selector: 'app-secao-administrativa',
  templateUrl: './secao-administrativa.component.html',
  styleUrls: ['./secao-administrativa.component.css']
})
export class SecaoAdministrativaComponent {
  cards : Card[] = [
    {
      Nome : "Projetos",
      Icon : "../../../../assets/icons/engrenagens.svg"
    },
    {
      Nome : "Usuários",
      Icon : "../../../../assets/icons/user.svg"
    },
    {
      Nome : "Notícias",
      Icon : "../../../../assets/icons/noticia.svg"
    },
    {
      Nome : "Contatos",
      Icon : "../../../../assets/icons/contatos.svg"
    },
    {
      Nome : "Sobre nós",
      Icon : "../../../../assets/icons/sobre-nos.svg"
    },
  ]

}
