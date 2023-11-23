import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-novo-membro-projeto',
  templateUrl: './novo-membro-projeto.component.html',
  styleUrls: ['./novo-membro-projeto.component.css']
})
export class NovoMembroProjetoComponent {
  projectId: string;
  novoMembroForm: FormGroup;
  users: any[] = []; // Lista de usuários para seleção

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.novoMembroForm = this.formBuilder.group({
      userId: ['', Validators.required]
    });

    this.projectId = this.route.snapshot.paramMap.get('projectId') || '';
    this.fetchUsers();
  }

  fetchUsers(): void {
    // Recupera a lista de usuários disponíveis para seleção
    this.apiService.get('users')
      .subscribe((data) => {
        this.users = data;
      });
  }

  adicionarMembro(): void {
    if (this.novoMembroForm.valid) {
      const userId = this.novoMembroForm.value.userId;

      // Chama a API para adicionar o usuário como membro do projeto
      this.apiService.post(`projects/${this.projectId}/members`, { userId })
        .subscribe(() => {
          // Redireciona para a página de detalhes do projeto ou outra rota desejada após adicionar o membro
          this.router.navigate(['/projects', this.projectId]);
        });
    }
  }
}