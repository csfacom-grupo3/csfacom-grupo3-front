import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/service/Api.Service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { Auth } from 'src/app/shared/class/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  falhaLogin : boolean = false;
  loader : boolean = false;

  constructor(private _apiService: ApiService,
              private _router: Router,
              private _authService: AuthService,
              private toastr: ToastrService) { }

  formClient : FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  
  logar(){
    const dataForm = this.formClient.value;
    this.loader = true;

    
    this._apiService.post("users/sign_in", dataForm)
      .subscribe({
        next: (data) => {
          this._authService.log(new Auth(data.email, data.token));          

          this._router.navigate(['/secao-administrativa']);
        },
        error: (erro)=>{
          if(erro.error.errors[0] == 'Email ou senha inválida'){
            this.falhaLogin = true;
          }
        }
      });
  }  
}
