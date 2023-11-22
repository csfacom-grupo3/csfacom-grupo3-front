import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.apiService.get('users')
      .subscribe((data) => {
        this.users = data;
      });
  }
}