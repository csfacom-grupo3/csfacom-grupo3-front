import { Component, Input, OnInit } from '@angular/core';
import { GridAdmin } from '../../class/GridAdmin/GridAdmin';
import { ApiService } from 'src/app/core/service/Api.Service';
import { GridAdminUsuario } from '../../class/GridAdmin/GridAdminUsuario';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  constructor(private _apiService : ApiService) { }

  @Input() projeto : boolean = false
  @Input() usuario : boolean = false
  @Input() noticia : boolean = false

  linhasDaGrid! : GridAdmin[];

  ngOnInit(): void {
    if(this.projeto){
      this.listarProjetos();
      return;
    }

    if(this.usuario){
      this.listarUsuarios();
      return;
    }

    if(this.noticia){
      this.listarNoticias()
      return;
    }
  }

  listarNoticias() {
    throw new Error('Method not implemented.');
  }
  
  listarUsuarios() {
    this._apiService.get("users")
      .subscribe({
        next: (dados) =>{
          console.log(dados);
          dados.forEach(e => {
            let teste = new GridAdminUsuario(e.name, e.permission);
            console.log(teste);

            // this.linhasDaGrid.push(new GridAdminUsuario(e.name, e.permissoes))
          });
        },
        error: (error) =>{
          console.log(error);
        }
      });
  }

  listarProjetos() {
    throw new Error('Method not implemented.');
  }
}
