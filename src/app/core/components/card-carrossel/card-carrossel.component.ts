import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-carrossel',
  templateUrl: './card-carrossel.component.html',
  styleUrls: ['./card-carrossel.component.css']
})
export class CardCarrosselComponent {
  @Input() title? : string;
}
