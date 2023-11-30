import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent implements OnInit {
  novoProjetoForm: FormGroup;
  nomeArquivo = '';
  membrosProjeto: string[] = [];
  imagem = "../../../../../assets/icons/novo-projeto/engrenagem.svg";
  users: any[] = [];
  roles: any[] = [
    { id: 1, name: 'Role 1' },
    { id: 2, name: 'Role 2' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.novoProjetoForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      start_date: [''],
      end_date: [''],
      coordinator_id: [1],
      project_members_attributes: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.apiService.get('roles')
      .subscribe((data: any[]) => {
        this.roles = data;
      });
  
    this.apiService.get('users')
      .subscribe((data: any[]) => {
        this.users = data;
        this.users.forEach(user => {
          this.novoProjetoForm.addControl(`role_${user.id}`, this.formBuilder.control('0'));
        });
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

  gravar(): void {
    if (this.novoProjetoForm.valid) {
      const projectData = this.novoProjetoForm.value;
      const payload = {
        name: projectData.name,
        description: projectData.description,
        start_date: projectData.start_date,
        end_date: projectData.end_date,
        coordinator_id: projectData.coordinator_id,
        project_members_attributes: projectData.project_members_attributes.filter((member: any) => !!member.member_id)
      };
  
      this.apiService.post('projects', payload).subscribe((projetoResponse: any) => {
        const projectId = projetoResponse.id;
  
        for (const userId of this.membrosProjeto) {
          const roleControl = this.novoProjetoForm.get(`role_${userId}`);
          const selectedRoleId = roleControl ? roleControl.value : '0';
          if (selectedRoleId !== '0') {
            const data = {
              project_id: projectId,
              user_id: userId,
              role_id: selectedRoleId
            };
  
            this.apiService.post('project-members', data).subscribe(() => {});
          }
        }
  
        this.router.navigate(['/secao-administrativa/listar-projetos']);
      });
    }
  }
  
  voltar(): void {
    this.router.navigate(['/secao-administrativa/listar-projetos']);
  }

  adicionarMembros(userId: string): void {
    const index = this.membrosProjeto.indexOf(userId);
    const membersArray = this.novoProjetoForm.get('project_members_attributes') as FormArray;
    
    if (index > -1) {
      this.membrosProjeto.splice(index, 1);
      membersArray.removeAt(index);
    } else {
      this.membrosProjeto.push(userId);
      membersArray.push(this.formBuilder.group({
        member_id: userId,
        role_id: this.novoProjetoForm.get(`role_${userId}`)?.value || '0'
      }));
    }

    const userDiv = document.getElementById(`user_${userId}`);
    const userSpan = userDiv?.querySelector('span');
  
    if (userSpan && userDiv) {
      if (index > -1) {
        userSpan.classList.remove('selected');
      } else {
        userSpan.classList.add('selected');
      }
    }
    //console.log('Membros do projeto:', this.membrosProjeto);
  }
  
  isSelected(userId: string): boolean {
    return this.membrosProjeto.includes(userId);
  }
}