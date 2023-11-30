import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-datails',
  templateUrl: './card-datails.component.html',
  styleUrls: ['./card-datails.component.css']
})
export class CardDatailsComponent implements OnInit{
  @Input() title? : string;
  @Input() desc? : string;
  @Input() foto? : string;
  
  ngOnInit(): void {
    this.foto = this.foto ? this.foto :  "../../../../assets/image-card.png";
  }

}
