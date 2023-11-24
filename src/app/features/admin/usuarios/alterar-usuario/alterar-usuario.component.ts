import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/Api.Service';
import { MatDialog } from '@angular/material/dialog';
import { SucessoAdicaoComponent } from 'src/app/shared/components/sucesso-adicao/sucesso-adicao.component';
import { NovoVinculoComponent } from '../../vinculos/novo-vinculo/novo-vinculo.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.component.html',
  styleUrls: ['./alterar-usuario.component.css']
})
export class AlterarUsuarioComponent implements OnInit {
  userId: string;
  usuarioForm: FormGroup;
  vinculos!: any[];
  nomeArquivo!: string;
  imagem: string = "../../../../../assets/icons/add-user.svg";
  loader: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    this.usuarioForm = this.formBuilder.group({
      foto: new FormControl(),
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      linkedin: new FormControl(),
      github: new FormControl(),
      password: new FormControl(null, [Validators.min(8), Validators.required]),
      password_confirmation: new FormControl(null, [Validators.min(8), Validators.required]),
    });
  }

  ngOnInit(): void {
    this.carregarUsuario();
    this.buscarVinculos();
  }

  carregarUsuario(): void {
    this.apiService.getById(`usuarios/${this.userId}`)
      .subscribe((usuario) => {
        this.usuarioForm.patchValue(usuario);
        // Preencha o formulário com os dados do usuário
      });
  }

  salvarAlteracoes(): void {
    if (this.usuarioForm.valid) {
      const dadosUsuario = this.usuarioForm.value;
      this.apiService.put(`usuarios/${this.userId}`, dadosUsuario)
        .subscribe(() => {
          this.router.navigate(['/secao-administrativa/listar-usuarios']);
        });
    }
  }

  abrirModal(): void {
    this.dialog.open(SucessoAdicaoComponent, {
      height: '35%',
      width: '50%',
    });
  }

  buscarVinculos(): void {
    this.apiService.get('academic_bonds')
      .subscribe({
        next: (data) => {
          this.vinculos = data;
        },
        error: (erro) => {
          console.log(erro);
        }
      });
  }

  novoVinculo(): void {
    const dialogRef = this.dialog.open(NovoVinculoComponent, {
      height: '35%',
      width: '50%',
    });

    dialogRef.afterClosed()
      .subscribe(() => {
        this.buscarVinculos();
      });
  }

  voltar(): void {
    this.router.navigate(['/secao-administrativa/listar-usuarios']);
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
}