import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  falhaLogin: boolean = false;
  loader: boolean = false;
  formClient: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.formClient = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  logar(): void {
    if (this.formClient.valid) {
      const dataForm = this.formClient.value;
      this.loader = true;

      this.apiService.post("users/sign_in", dataForm).subscribe({
        next: (data: any) => {
          this.authService.log(new Auth(data.email, data.token));
          this.router.navigate(['/secao-administrativa']);
        },
        error: (erro: any) => {
          if (erro.error.errors[0] === 'Email ou senha inválida') {
            this.falhaLogin = true;
          }
          this.toastr.error('Falha ao fazer login. Por favor, verifique suas credenciais.');
          this.loader = false;
        }
      });
    }
  }
}