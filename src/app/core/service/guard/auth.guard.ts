import {inject} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const authGuard = () => {
  const router = inject(Router);
  const auth = inject(AuthService);

  if(auth.getAuthentication().token){
    return true;
  }

  return router.parseUrl('/login');
};

export const areLogged = () => {
  const router = inject(Router);
  const auth = inject(AuthService);

  if(!auth.getAuthentication().token){
    return true;
  }

  return router.parseUrl('/secao-administrativa');
};