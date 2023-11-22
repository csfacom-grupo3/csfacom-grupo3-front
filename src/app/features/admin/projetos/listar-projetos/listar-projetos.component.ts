import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-listar-projetos',
  templateUrl: './listar-projetos.component.html',
  styleUrls: ['./listar-projetos.component.css']
})
export class ListarProjetosComponent implements OnInit {
  projects: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.apiService.get('projects')
      .subscribe((data) => {
        this.projects = data;
      });
  }
}