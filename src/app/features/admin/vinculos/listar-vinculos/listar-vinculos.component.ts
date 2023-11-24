import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/Api.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-vinculos',
  templateUrl: './listar-vinculos.component.html',
  styleUrls: ['./listar-vinculos.component.css']
})
export class ListarVinculosComponent implements OnInit {
  vinculos: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.carregarVinculos();
  }

  carregarVinculos(): void {
    this.apiService.get('vinculos')
      .subscribe((data) => {
        this.vinculos = data;
      });
  }

  redirecionarParaAdicionarVinculo(): void {
    this.router.navigate(['/novo-vinculo']); // Redireciona para a rota de adicionar vínculo
  }
}