import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent {
  public list = [
    {
      nome : 'nome'
    },
    {
      nome : 'nome2'
    },
    {
      nome : 'nome3'
    },
  ]
}
