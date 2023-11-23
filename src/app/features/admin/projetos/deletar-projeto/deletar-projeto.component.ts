import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-deletar-projeto',
  templateUrl: './deletar-projeto.component.html',
  styleUrls: ['./deletar-projeto.component.css']
})
export class DeletarProjetoComponent implements OnInit {
  projetoId: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.projetoId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    // Alguma lógica adicional na inicialização, se necessário
  }

  confirmarDelecao(): void {
    if (confirm('Tem certeza que deseja deletar este projeto?')) {
      this.apiService.delete(`projetos/${this.projetoId}`)
        .subscribe(() => {
          this.router.navigate(['/listar-projetos']);
        });
    }
  }
}