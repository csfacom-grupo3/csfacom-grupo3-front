import { Injectable } from '@angular/core';

import { 
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest }
from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Auth } from 'src/app/shared/class/auth';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private _auth : AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokens : Auth = this._auth.getAuthentication();
    
    if(tokens.email && tokens.token){
      var request = req.clone({
        setHeaders: {
          USER_EMAIL: typeof tokens.email === "string" ? tokens.email : '',
          USER_TOKEN: typeof tokens.token === "string" ? tokens.token : ''
        }
      });
      return next.handle(request);
    }

    return next.handle(req);

  }
}
