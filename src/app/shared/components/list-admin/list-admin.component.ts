import { Component } from '@angular/core';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent {
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
