import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent {
  noticias!: any[]

  constructor(private _apiService: ApiService) {

  }

  ngOnInit(): void {
    this._apiService.get('news')
      .subscribe((data) => {
        this.noticias = data;
      });
  }
}
