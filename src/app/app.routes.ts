import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/menu',
  },
  {
    path: 'start',
    loadComponent: () => import('./core/system/start-up/start-up.component')
      .then(c => c.StartUpComponent),
    canActivate: [authGuard]
  },

  {
    path: 'mens',
    loadComponent: () => import('./features/menu/menu.component')
      .then(_ => _.MenuComponent),
    data: { hidden: true } // Custom flag to hide it
  },
  {path: 'debug', loadComponent: () => import ('./core/debug/debug.component').then(c => c.DebugComponent)},
  {path: 'profile', loadComponent: () => import ('./core/system/profile/profile.component').then(c => c.ProfileComponent)},
  {path: 'settings', loadComponent: () => import ('./core/system/settings/settings.component').then(c => c.SettingsComponent)},
  {path: 'auth', loadComponent: () => import ('./core/system/auth/auth.component').then(c => c.AuthComponent)},
  {path: 'invalidAccount', loadComponent: () => import ('./core/system/invalid-account/invalid-account.component').then(c => c.InvalidAccountComponent)},
  {path: 'home', component: HomeComponent},
  {path: 'invoice', loadComponent: () => import ('./features/invoice/invoice.component').then(c => c.InvoiceComponent)},
  {path: 'menu', loadComponent: () => import ('./features/menu/menu.component').then(c => c.MenuComponent)},
  {path: 'users', loadComponent: () => import ('./features/users/users.component').then(c => c.UsersComponent)},
  {path: 'addContacts', loadComponent: () => import ('./features/contacts/contacts.component').then(c => c.ContactsComponent)},
  {path: 'apps', loadComponent: () => import ('./features/apps/apps.component').then(c => c.AppsComponent)},
  {path: 'payments', loadComponent: () => import ('./features/payments/payments.component').then(c => c.PaymentsComponent)},
  {path: 'cashbook-accounts', loadComponent: () => import ('./features/create-account/create-account.component').then(c => c.CreateAccountComponent)},
  {path: 'records', loadComponent: () => import ('./features/records/records-main/records-main.component').then(c => c.RecordsMainComponent)},
  {path: 'transaction-history', loadComponent: () => import ('./features/transaction-history/transaction-history.component').then(c => c.TransactionHistoryComponent)},
  {path: 'login', loadComponent: () => import ('./features/login/login.component').then(c => c.LoginComponent)},
   {path: 'payment', loadComponent: () => import ('./core/system/payment-form/payment-form.component').then(c => c.PaymentFormComponent)},
  {path: 'backupData', loadComponent: () => import ('./features/data/backup/backup.component').then(c => c.BackupComponent)},
  {path: 'backupDataPassword', loadComponent: () => import ('./features/data/backup-data-password/backup-data-password.component').then(c => c.BackupDataPasswordComponent)},
  {path: 'createUser', loadComponent: () => import ('./features/create-user/create-user.component').then(c => c.CreateUserComponent)},
  {path: 'statistics', loadComponent: () => import ('./features/cashbook/statistics/statistics.component').then(c => c.StatisticsComponent)},

  {path: 'cashbook', loadComponent: () => import ('./features/cashbook/cashbook.component').then(c => c.CashbookComponent)},
  {path: 'menu', loadComponent: () => import ('./features/menu/menu.component').then(c => c.MenuComponent)},
  {path: 'dashboard', loadComponent: () => import ('./features/dashboard/dashboard.component').then(c => c.DashboardComponent)},
  {path: 'ledger', loadComponent: () => import ('./features/cashbook/ledger/ledger.component').then(c => c.LedgerComponent)},
  {path: 'budget', loadComponent: () => import ('./features/cashbook/budget/budget.component').then(c => c.BudgetComponent)},
 {path: 'vault', loadComponent: () => import ('./core/system/vault/vault.component').then(c => c.VaultComponent)},
  {path: 'vaultPassword', loadComponent: () => import ('./core/system/vault/vault-password/vault-password.component').then(c => c.VaultPasswordComponent)},

  {path: 'database', loadComponent: () => import ('./features/database/database.component').then(c => c.DatabaseComponent)},









];
