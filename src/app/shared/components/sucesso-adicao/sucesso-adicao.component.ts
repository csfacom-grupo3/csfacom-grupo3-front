import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sucesso-adicao',
  templateUrl: './sucesso-adicao.component.html',
  styleUrls: ['./sucesso-adicao.component.css']
})
export class SucessoAdicaoComponent {
  constructor(
    public _dialogRef: MatDialogRef<SucessoAdicaoComponent >
  ){ }

  fechar(){
    this._dialogRef.close();
  }
}
