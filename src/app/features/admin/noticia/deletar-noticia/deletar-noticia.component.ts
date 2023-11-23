import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-deletar-noticia',
  templateUrl: './deletar-noticia.component.html',
  styleUrls: ['./deletar-noticia.component.css']
})
export class DeletarNoticiaComponent implements OnInit {
  noticiaId: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.noticiaId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {

  }

  confirmarDelecao(): void {
    if (confirm('Tem certeza que deseja deletar esta notícia?')) {
      this.apiService.delete(`noticias/${this.noticiaId}`)
        .subscribe(() => {
          this.router.navigate(['/listar-noticia']);
        });
    }
  }
}