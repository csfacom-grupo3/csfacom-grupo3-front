import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-nova-noticia',
  templateUrl: './nova-noticia.component.html',
  styleUrls: ['./nova-noticia.component.css']
})
export class NovaNoticiaComponent implements OnInit {
  novaNoticiaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.novaNoticiaForm = this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      content: ['', Validators.required],
      visibility: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Lógica de inicialização, se necessário
  }

  criarNoticia(): void {
    if (this.novaNoticiaForm.valid) {
      const { title, subtitle, content, visibility } = this.novaNoticiaForm.value;

      this.apiService.post('news', { title, subtitle, content, visibility })
        .subscribe(() => {
          this.router.navigate(['secao-administrativa/listar-noticias']);
        });
    }
  }

  voltar(): void {
    this.router.navigate(['secao-administrativa/listar-noticias']);
  }
}