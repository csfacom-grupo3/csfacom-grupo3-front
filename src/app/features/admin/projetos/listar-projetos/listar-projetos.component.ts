import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-listar-projetos',
  templateUrl: './listar-projetos.component.html',
  styleUrls: ['./listar-projetos.component.css']
})
export class ListarProjetosComponent implements OnInit {
  projects: any[] = [];

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.carregarProjetos();
  }

  carregarProjetos(): void {
    this.apiService.get('projects')
      .subscribe((data) => {
        this.projects = data;
      });
  }

  redirecionarParaAlteracao(idProjeto: string): void {
    this.router.navigate(['/secao-administrativa/alterar-projeto', idProjeto]);
  }

  confirmarExclusao(projectId: string) {
    if (confirm('Tem certeza que deseja excluir este projeto?')) {
      this.apiService.delete(`projects/${projectId}`).subscribe(() => {
        this.carregarProjetos();
      });
    }
  }

  redirecionarParaNovoProjeto(): void {
    this.router.navigate(['/secao-administrativa/novo-projeto']); 
  }
}