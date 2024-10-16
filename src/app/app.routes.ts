import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '**',
  },
  {path: 'home', component: HomeComponent},
  {path: 'cashbook-accounts', loadComponent: () => import ('./features/create-account/create-account.component').then(c => c.CreateAccountComponent)},
  {path: 'records', loadComponent: () => import ('./features/records/records-main/records-main.component').then(c => c.RecordsMainComponent)},
  {path: 'transaction-history', loadComponent: () => import ('./features/transaction-history/transaction-history.component').then(c => c.TransactionHistoryComponent)},
  {path: 'login', loadComponent: () => import ('./features/login/login.component').then(c => c.LoginComponent)},
  {path: 'reportCenter', loadComponent: () => import ('../app/core/system/report-aproblem/report-aproblem.component').then(c => c.ReportAproblemComponent)},
  {path: 'payment', loadComponent: () => import ('../app/core/system/payment-form/payment-form.component').then(c => c.PaymentFormComponent)},

  {path: 'cashbook', loadComponent: () => import ('./features/cashbook/cashbook.component').then(c => c.CashbookComponent)},
  {path: 'menu', loadComponent: () => import ('./features/menu/menu.component').then(c => c.MenuComponent)},
  {path: 'dashboard', loadComponent: () => import ('./features/dashboard/dashboard.component').then(c => c.DashboardComponent)},
  {path: 'ledger', loadComponent: () => import ('./features/cashbook/ledger/ledger.component').then(c => c.LedgerComponent)},
  {path: 'database', loadComponent: () => import ('./features/database/database.component').then(c => c.DatabaseComponent)},
  {path: 'invalidAccount', loadComponent: () => import ('./features/invalid-user/invalid-user.component').then(c => c.InvalidUserComponent)},
  {path: '**', loadComponent: () => import ('./features/not-found/not-found.component').then(c => c.NotFoundComponent)},









];
