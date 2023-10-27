import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/service/Api.Service';
import { Vinculo } from 'src/app/shared/class/vinculo';
import { SucessoAdicaoComponent } from 'src/app/shared/components/sucesso-adicao/sucesso-adicao.component';

@Component({
  selector: 'app-novo-vinculo',
  templateUrl: './novo-vinculo.component.html',
  styleUrls: ['./novo-vinculo.component.css']
})
export class NovoVinculoComponent {
  constructor(
    private _dialogRef: MatDialogRef<NovoVinculoComponent>,
    public _dialog: MatDialog,
    private _apiService: ApiService
  ){ }

    vinculosAdicionados! : Vinculo[];

  fechar(){
    this._dialogRef.close();
  }

  salvar(nomeVinculo: string){
    const vinculo = new Vinculo(nomeVinculo); 
    
    this._apiService.post("academic_bonds", vinculo)
      .subscribe({
        next: (data) => {
          this.abrirModal();
        },
      })
  }

  abrirModal(){
    this._dialog.open(SucessoAdicaoComponent, {
      height: '35%',
      width: '50%',
    });
  }
}
