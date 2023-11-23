import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-deletar-usuario',
  templateUrl: './deletar-usuario.component.html',
  styleUrls: ['./deletar-usuario.component.css']
})
export class DeletarUsuarioComponent implements OnInit {
  userId: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    // Pode-se realizar alguma lógica adicional na inicialização, se necessário
  }

  confirmarDelecao(): void {
    if (confirm('Tem certeza que deseja deletar este usuário?')) {
      this.apiService.delete(`usuarios/${this.userId}`)
        .subscribe(() => {
          this.router.navigate(['/listar-usuarios']);
        });
    }
  }
}