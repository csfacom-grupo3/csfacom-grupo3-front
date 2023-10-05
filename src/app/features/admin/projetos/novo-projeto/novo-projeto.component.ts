import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent {
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

   gravar(){
    
   }
}
