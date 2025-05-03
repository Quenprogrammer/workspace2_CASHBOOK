import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const loggedIn = localStorage.getItem('loggedIn');

  if (loggedIn === 'true') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
