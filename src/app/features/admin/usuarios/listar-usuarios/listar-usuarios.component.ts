import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.apiService.get('users').subscribe((data: any[]) => {
      this.usuarios = data;
    });
  }

  redirecionarParaAlteracao(idUsuario: string): void {
    this.router.navigate(['/alterar-usuario', idUsuario]);
  }

  redirecionarParaExclusao(idUsuario: string): void {
    this.router.navigate(['/deletar-usuario', idUsuario]);
  }

  redirecionarParaNovoUsuario(): void {
    this.router.navigate(['/novo-usuario']); 
  }
}