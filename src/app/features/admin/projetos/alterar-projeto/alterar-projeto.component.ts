import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-alterar-projeto',
  templateUrl: './alterar-projeto.component.html',
  styleUrls: ['./alterar-projeto.component.css']
})
export class AlterarProjetosComponent implements OnInit {
  projetoForm: FormGroup;
  nomeArquivo = '';
  imagem = "../../../../../assets/icons/novo-projeto/engrenagem.svg";
  users: any[] = [];
  projetoId!: string;
  membrosProjeto: string[] = [];
  roles: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.projetoForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      start_date: [''],
      end_date: [''],
      coordinator_id: [1],
      project_members_attributes: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.projetoId = this.route.snapshot.paramMap.get('id') || '';
    let membros : any[];

    this.apiService.get(`projects/${this.projetoId}`)
      .subscribe((projeto: any) => {
        this.projetoForm.patchValue(projeto);
        membros = projeto.project_members;


        this.apiService.get('users')
        .subscribe((data: any[]) => {
          this.users = data;
          this.users.forEach(user => {
         

            membros.forEach(membro => {
              if(membro.id == user.id){
                this.adicionarMembros(user.id)
              }
            });
              
            this.projetoForm.addControl(`role_${user.id}`, this.formBuilder.control('0'));
          });
        });
      });

      this.apiService.get('roles')
      .subscribe((data: any[]) => {
        this.roles = data;
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

  salvarAlteracoes(): void {
    if (this.projetoForm.valid) {
      const projetoData = this.projetoForm.value;
      this.apiService.put(`projects/${this.projetoId}`, projetoData)
        .subscribe(() => {
          this.router.navigate(['/secao-administrativa/listar-projetos']);
        });
    }
  }

  voltar(): void {
    this.router.navigate(['/secao-administrativa/listar-projetos']);
  }

  isSelected(userId: string): boolean {
    return this.membrosProjeto.includes(userId);
  }

  adicionarMembros(userId: string): void {
    const index = this.membrosProjeto.indexOf(userId);
    const membersArray = this.projetoForm.get('project_members_attributes') as FormArray;
    
    if (index > -1) {
      this.membrosProjeto.splice(index, 1);
      membersArray.removeAt(index);
    } else {
      this.membrosProjeto.push(userId);
      membersArray.push(this.formBuilder.group({
        member_id: userId,
        role_id: this.projetoForm.get(`role_${userId}`)?.value || '0'
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
  }

  gravar(){
    if (this.projetoForm.valid) {
      const projectData = this.projetoForm.value;
      const payload = {
        name: projectData.name,
        description: projectData.description,
        start_date: projectData.start_date,
        end_date: projectData.end_date,
        coordinator_id: projectData.coordinator_id,
        project_members_attributes: projectData.project_members_attributes.filter((member: any) => !!member.member_id)
      };
  
      this.apiService.put(`projects/${this.projetoId}`, payload).subscribe((projetoResponse: any) => {
        const projectId = projetoResponse.id;
  
        for (const userId of this.membrosProjeto) {
          const roleControl = this.projetoForm.get(`role_${userId}`);
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
}