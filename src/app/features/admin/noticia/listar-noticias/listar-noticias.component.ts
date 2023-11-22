import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css']
})
export class ListarNoticiasComponent implements OnInit {
  noticias: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.carregarNoticias();
  }

  carregarNoticias(): void {
    this.apiService.get('noticias')
      .subscribe((data) => {
        this.noticias = data;
      });
  }
}