import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarioLogado() : boolean{
    return sessionStorage.getItem('email') ? true : false;
  }

  title = 'portal-ledes';
}
