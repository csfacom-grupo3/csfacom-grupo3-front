import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent {
  constructor(private _apiService: ApiService) { }

  nomeArquivo! : string;
  imagem : string = "../../../../../assets/icons/add-user.svg";
  erroAoGravar : boolean = false;
  erro! : string;

  formClient : FormGroup = new FormGroup({
    foto: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    linkedin: new FormControl(),
    github: new FormControl(),
    password: new FormControl(),
    password_confirmation: new FormControl(),
  });

  checkArquivo(event : any){
    if(event.target.files[0].type == "image/jpeg"){
      this.nomeArquivo =event.target.files[0].name;
      this.imagem = URL.createObjectURL(event.target.files[0]);
    }
    else{
      this.nomeArquivo = "Arquivo inválido, utilize um arquivo no formato .jpeg";
      this.imagem = "../../../../../assets/icons/add-user.svg";
      event.target.value = null;
    }
   }

   gravar(){
    const dataForm = this.formClient.value;

    this._apiService.post("users", dataForm)
    .subscribe({
      next: (data) => {       
        console.log(data);
      },
      error: (erro)=>{
        this.erroAoGravar = true;
        this.erro = erro.error.errors[0];
      }
    });
   }
}
