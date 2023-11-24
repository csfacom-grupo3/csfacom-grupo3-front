import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent {
  novoProjetoForm: FormGroup;
  nomeArquivo = '';
  imagem = "../../../../../assets/icons/novo-projeto/engrenagem.svg";
  users: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.novoProjetoForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      start_date: [''],
      end_date: [''],
      coordinator_id: [1] // Assuming a default coordinator ID
    });
  }

  ngOnInit(): void {
    this.apiService.get('users')
      .subscribe((data: any[]) => {
        this.users = data;
      });
  }

  checkArquivo(event: any): void {
    if (event.target.files[0].type === "image/jpeg") {
      this.nomeArquivo = event.target.files[0].name;
      this.imagem = URL.createObjectURL(event.target.files[0]);
    } else {
      this.nomeArquivo = "Arquivo inválido, utilize um arquivo no formato .jpeg";
      this.imagem = "../../../../../assets/icons/novo-projeto/engrenagem.svg";
      event.target.value = null;
    }
  }

  gravar(): void {
    if (this.novoProjetoForm.valid) {
      const projetoData = this.novoProjetoForm.value;
      this.apiService.post('projects', projetoData)
        .subscribe(() => {
          this.router.navigate(['/secao-administrativa/listar-projetos']);
        });
    }
  }

  voltar(): void {
    this.router.navigate(['/secao-administrativa/listar-projetos']);
  }

  adicionarMembros(): void {

  }
}