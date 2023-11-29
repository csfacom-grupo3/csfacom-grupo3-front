import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit{
  projetos! : any[];
  
  constructor(private _apiService : ApiService) {
      
  }

  ngOnInit(): void {
    this._apiService.get('projects')
    .subscribe((data) => {
      this.projetos = data;
    });
  }

}
