import { Routes } from '@angular/router';
import {HomeComponent} from '../../features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/menu',
  },
  {path: 'home', component: HomeComponent},
  {path: '', loadComponent: () => import ('../../features/menu/menu.component').then(c => c.MenuComponent)},
  {path: 'cashbook-accounts', loadComponent: () => import ('../../features/create-account/create-account.component').then(c => c.CreateAccountComponent)},
  {path: 'records', loadComponent: () => import ('../../features/records/records-main/records-main.component').then(c => c.RecordsMainComponent)},
  {path: 'transaction-history', loadComponent: () => import ('../../features/transaction-history/transaction-history.component').then(c => c.TransactionHistoryComponent)},
  {path: 'login', loadComponent: () => import ('../../features/login/login.component').then(c => c.LoginComponent)},
  {path: 'reportCenter', loadComponent: () => import ('./report-aproblem/report-aproblem.component').then(c => c.ReportAproblemComponent)},
  {path: 'payment', loadComponent: () => import ('./payment-form/payment-form.component').then(c => c.PaymentFormComponent)},
  {path: 'product-key', loadComponent: () => import ('./product-key/product-key.component').then(c => c.ProductKeyComponent)},
  {path: 'backupData', loadComponent: () => import ('../../features/data/backup/backup.component').then(c => c.BackupComponent)},
  {path: 'backupDataPassword', loadComponent: () => import ('../../features/data/backup-data-password/backup-data-password.component').then(c => c.BackupDataPasswordComponent)},

  {path: 'createUser', loadComponent: () => import ('../../features/create-user/create-user.component').then(c => c.CreateUserComponent)},

  {path: 'cashbook', loadComponent: () => import ('../../features/cashbook/cashbook.component').then(c => c.CashbookComponent)},
  {path: 'menu', loadComponent: () => import ('../../features/menu/menu.component').then(c => c.MenuComponent)},
  {path: 'dashboard', loadComponent: () => import ('../../features/dashboard/dashboard.component').then(c => c.DashboardComponent)},
  {path: 'ledger', loadComponent: () => import ('../../features/cashbook/ledger/ledger.component').then(c => c.LedgerComponent)},
  {path: 'budget', loadComponent: () => import ('../../features/cashbook/budget/budget.component').then(c => c.BudgetComponent)},
  {path: 'help-center', loadComponent: () => import ('./help-center/help-center.component').then(c => c.HelpCenterComponent)},

  {path: 'database', loadComponent: () => import ('../../features/database/database.component').then(c => c.DatabaseComponent)},
  {path: 'invalidAccount', loadComponent: () => import ('../../features/invalid-user/invalid-user.component').then(c => c.InvalidUserComponent)},
  {path: '**', loadComponent: () => import ('../../features/not-found/not-found.component').then(c => c.NotFoundComponent)},









];
