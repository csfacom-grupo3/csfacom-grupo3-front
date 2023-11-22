import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';
@Component({
  selector: 'app-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent {
  novoProjetoForm: FormGroup;
  nomeArquivo! : string;
  imagem : string = "../../../../../assets/icons/novo-projeto/engrenagem.svg";

  formClient : FormGroup = new FormGroup({
    foto: new FormControl(),
    nome: new FormControl(),
    email: new FormControl(),
    linkedin: new FormControl(),
    github: new FormControl(),
    senha: new FormControl(),
    confirmaSenha: new FormControl(),
  });

  checkArquivo(event : any){
    if(event.target.files[0].type == "image/jpeg"){
      this.nomeArquivo =event.target.files[0].name;
      this.imagem = URL.createObjectURL(event.target.files[0]);
    }
    else{
      this.nomeArquivo = "Arquivo inválido, utilize um arquivo no formato .jpeg";
      this.imagem = "../../../../../assets/icons/novo-projeto/engrenagem.svg";
      event.target.value = null;
    }
   }

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.novoProjetoForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      // adicionar mais campos
    });
  }

   gravar(): void{
    if (this.novoProjetoForm.valid) {
      const projetoData = this.novoProjetoForm.value;
      this.apiService.post('projects', projetoData)
        .subscribe(() => {
          // Redirecionar para a página de detalhes do novo projeto ou outra rota desejada
          this.router.navigate(['/projects']);
        });
    }
   }
}
