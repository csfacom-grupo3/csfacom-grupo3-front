import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent {
  usuarios! : any[]
  
  constructor(private _apiService : ApiService) {
      
  }

  ngOnInit(): void {
    this._apiService.get('users')
    .subscribe((data) => {
      this.usuarios = data;
    });
  }
}
