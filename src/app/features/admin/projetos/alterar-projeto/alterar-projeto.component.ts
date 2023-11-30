import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-alterar-projeto',
  templateUrl: './alterar-projeto.component.html',
  styleUrls: ['./alterar-projeto.component.css']
})
export class AlterarProjetosComponent implements OnInit {
  projetoForm: FormGroup;
  nomeArquivo = '';
  imagem = "../../../../../assets/icons/novo-projeto/engrenagem.svg";
  users: any[] = [];
  projetoId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.projetoForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      start_date: [''],
      end_date: [''],
      coordinator_id: [1] // Assuming a default coordinator ID
    });
  }

  ngOnInit(): void {
    this.projetoId = this.route.snapshot.paramMap.get('id') || '';
    this.apiService.get(`projects/${this.projetoId}`)
      .subscribe((projeto: any) => {
        this.projetoForm.patchValue(projeto);
      });

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

  salvarAlteracoes(): void {
    if (this.projetoForm.valid) {
      const projetoData = this.projetoForm.value;
      this.apiService.put(`projects/${this.projetoId}`, projetoData)
        .subscribe(() => {
          this.router.navigate(['/secao-administrativa/listar-projetos']);
        });
    }
  }

  voltar(): void {
    this.router.navigate(['/secao-administrativa/listar-projetos']);
  }

  adicionarMembros(): void {
    // Lógica para adicionar membros ao projeto
  }
}