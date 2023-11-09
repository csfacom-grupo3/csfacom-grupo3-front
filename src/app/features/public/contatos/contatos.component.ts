import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit{
  title = 'google-maps';

  ngOnInit(): void {
    let loader =  new Loader({
      apiKey: 'AIzaSyBd0NMxydNEw-hM-sD2y9ws2x7yZDUUZQw'
    });

    loader.load().then(()=> {
      new google.maps.Map(document.getElementById("mapa")!, {
        center: { lat: -20.5025212, lng: -54.6160359 },
        zoom: 15
      })
    })
  }
}
