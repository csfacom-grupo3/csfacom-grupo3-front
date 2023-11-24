import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/service/Api.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-noticia',
  templateUrl: './nova-noticia.component.html',
  styleUrls: ['./nova-noticia.component.css']
})
export class NovaNoticiaComponent {

  constructor(private apiService: ApiService, private router: Router) {}

  criarNoticia(titulo: string, conteudo: string): void {
    const novaNoticia = {
      titulo: titulo,
      conteudo: conteudo
      // Adicione outros campos conforme necessário para a notícia
    };

    this.apiService.post('noticias', novaNoticia)
      .subscribe(() => {
        this.router.navigate(['/noticias']); // Redireciona para a lista de notícias após o sucesso
      });
  }
}