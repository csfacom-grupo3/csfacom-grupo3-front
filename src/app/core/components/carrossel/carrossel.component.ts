import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit{
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: 'assets/image-noticia1.png',
    };
    this.slides[1] = {
      src: 'assets/image-noticia2.png',
    }
    this.slides[2] = {
      src: 'assets/image-noticia3.png',
    }
  }
}
