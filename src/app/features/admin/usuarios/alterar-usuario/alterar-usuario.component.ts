import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.component.html',
  styleUrls: ['./alterar-usuario.component.css']
})
export class AlterarUsuarioComponent implements OnInit {
  userId: string;
  usuario: any = {}; // Modelo do usuário a ser alterado

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.carregarUsuario();
  }

  carregarUsuario(): void {
    this.apiService.getById(`usuarios/${this.userId}`)
      .subscribe((usuario) => {
        this.usuario = usuario;
      });
  }

  salvarAlteracoes(): void {
    this.apiService.put(`usuarios/${this.userId}`, this.usuario)
      .subscribe(() => {
        this.router.navigate(['/listar-usuarios']);
      });
  }
}