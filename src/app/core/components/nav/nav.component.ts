import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() logado! : boolean;

  sair(){
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
  }
}
