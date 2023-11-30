import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css']
})
export class ListarNoticiasComponent implements OnInit {
  news: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.carregarNoticias();
  }

  carregarNoticias(): void {
    this.apiService.get('news')
      .subscribe((data) => {
        console.log('Dados recebidos:', data);
        this.news = data;
      });
  }

  redirecionarParaAlterar(noticiaId: string): void {
    this.router.navigate([`/secao-administrativa/alterar-noticia/${noticiaId}`]);
  }

  confirmarExclusao(idNoticia: string) {
    if (confirm('Tem certeza que deseja excluir esta noticia?')) {
      this.apiService.delete(`news/${idNoticia}`).subscribe(() => {
        this.carregarNoticias();
      });
    }
  }

  redirecionarParaNovaNoticia(): void {
    this.router.navigate(['/secao-administrativa/nova-noticia']);
  }
}