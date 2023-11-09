import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-datails',
  templateUrl: './card-datails.component.html',
  styleUrls: ['./card-datails.component.css']
})
export class CardDatailsComponent {
  @Input() title? : string;
  @Input() desc? : string;
}
