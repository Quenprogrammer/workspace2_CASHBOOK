import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {path: 'home', component: HomeComponent},
  {path: 'login', loadComponent: () => import ('./features/login/login.component').then(c => c.LoginComponent)},










];
