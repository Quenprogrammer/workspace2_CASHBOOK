import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  // ✅ Check if userToken exists in localStorage
  const isAuthenticated = !!localStorage.getItem('userToken');

  if (!isAuthenticated) {
    router.navigate(['/login']); // Redirect if not logged in
    return false;
  }

  return true;
};
