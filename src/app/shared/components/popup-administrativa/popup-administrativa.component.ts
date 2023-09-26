import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopupAdministrativo } from '../../class/popup-administrativo';

@Component({
  selector: 'app-popup-administrativa',
  templateUrl: './popup-administrativa.component.html',
  styleUrls: ['./popup-administrativa.component.css']
})
export class PopupAdministrativaComponent {
  public nomeBotoes! : PopupAdministrativo;
  
  constructor(
    public dialogRef: MatDialogRef<PopupAdministrativaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PopupAdministrativo,
  ) {
    this.nomeBotoes = data;
  }

  fechar(){
    this.dialogRef.close();
  }
}
