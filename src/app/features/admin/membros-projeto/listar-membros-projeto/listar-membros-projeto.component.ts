import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-listar-membros-projeto',
  templateUrl: './listar-membros-projeto.component.html',
  styleUrls: ['./listar-membros-projeto.component.css']
})
export class ListarMembrosProjetoComponent implements OnInit {
  projectId!: string;
  members: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('projectId') || '';
      this.fetchMembers();
    });
  }

  fetchMembers(): void {
    this.apiService.get(`projects/${this.projectId}/members`)
      .subscribe((data) => {
        this.members = data;
      });
  }
}