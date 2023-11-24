import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css']
})
export class ListarNoticiasComponent implements OnInit {
  noticias: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.carregarNoticias();
  }

  carregarNoticias(): void {
    this.apiService.get('noticias').subscribe((data: any[]) => {
      this.noticias = data;
    });
  }

  redirecionarParaAlterar(noticiaId: string): void {
    this.router.navigate([`/alterar-noticia/${noticiaId}`]);
  }

  redirecionarParaExcluir(noticiaId: string): void {
    this.router.navigate([`/excluir-noticia/${noticiaId}`]);
  }

  redirecionarParaNovaNoticia(): void {
    this.router.navigate(['/nova-noticia']);
  }
}