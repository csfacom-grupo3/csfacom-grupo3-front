import { Injectable } from '@angular/core';
import { Auth } from 'src/app/shared/class/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  log(user : Auth) : void{
    if(user.email && user.token){
      sessionStorage.setItem('email', user.email);
      sessionStorage.setItem('token', user.token);
      return;
    }

    throw new Error("Email e token devem ser informados");
  }

  logOff() : void{
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
  }

  getAuthentication() : Auth{
    return new Auth(sessionStorage.getItem('email'), sessionStorage.getItem('token'));
  }
}