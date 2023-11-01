import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/service/Api.Service';
import { SucessoAdicaoComponent } from 'src/app/shared/components/sucesso-adicao/sucesso-adicao.component';
import { NovoVinculoComponent } from '../../vinculos/novo-vinculo/novo-vinculo.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit{
  constructor(private _apiService: ApiService,
              public dialog: MatDialog,
              private toastr: ToastrService          
  ) { }

  vinculos! : any[];
  nomeArquivo! : string;
  imagem : string = "../../../../../assets/icons/add-user.svg";
  erroAoGravar : boolean = false;
  erros! : string;

  formClient : FormGroup = new FormGroup({
    foto: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    linkedin: new FormControl(),
    github: new FormControl(),
    password: new FormControl(),
    password_confirmation: new FormControl(),
    academic_bond_id: new FormControl(0),
  });

  ngOnInit(): void {
    this.buscarVinculos();
  }

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
    this.toastr.success('mensagem', 'titulo')
    const dataForm = this.formClient.value;

    this._apiService.post("users", dataForm)
    .subscribe({
      next: (data) => {   
        this.formClient.reset({
          academic_bond_id: 0
        });
        this.abrirModal();
      },
      error: (erro)=>{
        this.erroAoGravar = true;
        this.erros = erro.error.errors;
      }
    });
   }

   abrirModal(){
    this.dialog.open(SucessoAdicaoComponent, {
      height: '35%',
      width: '50%',
    });
  }

  buscarVinculos(){
    this._apiService.get('academic_bonds')
    .subscribe({
      next: (data) =>{
        this.vinculos = data;
      },
      error: (erro) => {
        console.log(erro);
      }
    })
  }

  novoVinculo(){
    const dialogRef = this.dialog.open(NovoVinculoComponent, {
      height: '35%',
      width: '50%',
    });

    dialogRef.afterClosed()
    .subscribe(() => {
      this.buscarVinculos();
    });
  }
}
