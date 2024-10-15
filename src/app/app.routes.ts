import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {path: 'home', component: HomeComponent},
  {path: 'contact-us', loadComponent: () => import('./features/contact-us/contact-us.component').then(_ => _.ContactUsComponent)},
  {path: 'programs', loadComponent: () => import('./features/programs/programs.component').then(_ => _.ProgramsComponent)},
  {path: 'commercial-production', loadComponent: () => import('./features/commercial-production/commercial-production.component').then(_ => _.CommercialProductionComponent)},
  {path: 'gallery', loadComponent: () => import('./features/gallery/gallery.component').then(_ => _.GalleryComponent)},
  {path: 'career', loadComponent: () => import('./features/career/career.component').then(_ => _.CareerComponent)},
  {path: 'public-education', loadComponent: () => import('./features/public-education/public-education.component').then(_ => _.PublicEducationComponent)},
  {path: 'about-us', loadComponent: () => import('./features/about-us/about-us.component').then(_ => _.AboutUsComponent)},
  {path: 'certificate-verification', loadComponent: () => import('./features/certificate-verification/certificate-verification.component').then(_ => _.CertificateVerificationComponent)},
  {path: 'news', loadComponent: () => import('./features/news/news.component').then(_ => _.NewsComponent)},
  {path: '**', loadComponent: () => import('./features/not-found/not-found.component').then(_ => _.NotFoundComponent)},











];
