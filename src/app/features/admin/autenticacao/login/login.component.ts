import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/service/Api.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private apiService: ApiService) { }

  formClient : FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  
  logar(){
    const dataForm = this.formClient.value;

    this.apiService.post("users/sign_in", dataForm)
      .subscribe(
          (data: any[]) => {
            console.log(data);
        },
        (error : any) =>{
          console.log(error)
        }
      );
  }  
}
