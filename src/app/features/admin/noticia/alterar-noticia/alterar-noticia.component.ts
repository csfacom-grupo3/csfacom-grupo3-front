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
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      content: ['', Validators.required],
      visibility: [''] 
    });

    this.noticiaId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.carregarNoticia();
  }

  carregarNoticia(): void {
    this.apiService.getById(`news/${this.noticiaId}`)
      .subscribe((noticia) => {
        this.alterarNoticiaForm.patchValue({
          title: noticia.title,
          subtitle: noticia.subtitle,
          content: noticia.content,
          visibility: noticia.visibility
        });
      });
  }

  salvarAlteracoes(): void {
    if (this.alterarNoticiaForm.valid) {
      const { title, subtitle, content, visibility } = this.alterarNoticiaForm.value;

      this.apiService.put(`news/${this.noticiaId}`, { title, subtitle, content, visibility })
        .subscribe(() => {
          this.router.navigate(['secao-administrativa/listar-noticias']);
        });
    }
  }

  voltar(): void {
    this.router.navigate(['secao-administrativa/listar-noticias']);
  }
}
