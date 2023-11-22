import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-nova-noticia',
  templateUrl: './nova-noticia.component.html',
  styleUrls: ['./nova-noticia.component.css']
})
export class NovaNoticiaComponent {
  novaNoticiaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.novaNoticiaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      conteudo: ['', Validators.required],
      // Outros campos conforme necessário para a notícia
    });
  }

  criarNoticia(): void {
    if (this.novaNoticiaForm.valid) {
      const dadosNoticia = this.novaNoticiaForm.value;
      this.apiService.post('noticias', dadosNoticia)
        .subscribe(() => {
          // Redirecionar para a lista de notícias ou outra rota desejada
          this.router.navigate(['/noticias']);
        });
    }
  }
}