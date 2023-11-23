import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-alterar-noticia',
  templateUrl: './alterar-noticia.component.html',
  styleUrls: ['./alterar-noticia.component.css']
})
export class AlterarNoticiaComponent implements OnInit {
  noticiaId: string;
  alterarNoticiaForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.alterarNoticiaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      conteudo: ['', Validators.required]
    });

    this.noticiaId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.carregarNoticia();
  }

  carregarNoticia(): void {
    this.apiService.getById(`noticias/${this.noticiaId}`)
      .subscribe((noticia) => {
        this.alterarNoticiaForm.patchValue({
          titulo: noticia.titulo,
          conteudo: noticia.conteudo
        });
      });
  }

  salvarAlteracoes(): void {
    if (this.alterarNoticiaForm.valid) {
      const { titulo, conteudo } = this.alterarNoticiaForm.value;

      this.apiService.put(`noticias/${this.noticiaId}`, { titulo, conteudo })
        .subscribe(() => {
          this.router.navigate(['/listar-noticia']);
        });
    }
  }
}