import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/menu',
  },
  {path: 'statUp', loadComponent: () => import ('./core/system/start-up/start-up.component').then(c => c.StartUpComponent)},
  {path: 'loading', loadComponent: () => import ('./core/system/loading/loading.component').then(c => c.LoadingComponent)},
  {path: 'debug', loadComponent: () => import ('./core/debug/debug.component').then(c => c.DebugComponent)},
  {path: 'profile', loadComponent: () => import ('./core/profile/profile.component').then(c => c.ProfileComponent)},

  {path: 'home', component: HomeComponent},
  {path: 'menu', loadComponent: () => import ('./features/menu/menu.component').then(c => c.MenuComponent)},
  {path: 'addContacts', loadComponent: () => import ('./features/contacts/contacts.component').then(c => c.ContactsComponent)},
  {path: 'apps', loadComponent: () => import ('./features/apps/apps.component').then(c => c.AppsComponent)},
  {path: 'cashbook-accounts', loadComponent: () => import ('./features/create-account/create-account.component').then(c => c.CreateAccountComponent)},
  {path: 'records', loadComponent: () => import ('./features/records/records-main/records-main.component').then(c => c.RecordsMainComponent)},
  {path: 'transaction-history', loadComponent: () => import ('./features/transaction-history/transaction-history.component').then(c => c.TransactionHistoryComponent)},
  {path: 'login', loadComponent: () => import ('./features/login/login.component').then(c => c.LoginComponent)},
  {path: 'reportCenter', loadComponent: () => import ('./core/system/report-aproblem/report-aproblem.component').then(c => c.ReportAproblemComponent)},
  {path: 'payment', loadComponent: () => import ('./core/system/payment-form/payment-form.component').then(c => c.PaymentFormComponent)},
  {path: 'product-key', loadComponent: () => import ('./core/system/product-key/product-key.component').then(c => c.ProductKeyComponent)},
  {path: 'backupData', loadComponent: () => import ('./features/data/backup/backup.component').then(c => c.BackupComponent)},
  {path: 'backupDataPassword', loadComponent: () => import ('./features/data/backup-data-password/backup-data-password.component').then(c => c.BackupDataPasswordComponent)},

  {path: 'createUser', loadComponent: () => import ('./features/create-user/create-user.component').then(c => c.CreateUserComponent)},
  {path: 'stats', loadComponent: () => import ('./features/statistics/statistics.component').then(c => c.StatisticsComponent)},
  {path: 'tools', loadComponent: () => import ('./features/tools/tools.component').then(c => c.ToolsComponent)},
  {path: 'statistics', loadComponent: () => import ('./features/cashbook/statistics/statistics.component').then(c => c.StatisticsComponent)},

  {path: 'cashbook', loadComponent: () => import ('./features/cashbook/cashbook.component').then(c => c.CashbookComponent)},
  {path: 'menu', loadComponent: () => import ('./features/menu/menu.component').then(c => c.MenuComponent)},
  {path: 'dashboard', loadComponent: () => import ('./features/dashboard/dashboard.component').then(c => c.DashboardComponent)},
  {path: 'ledger', loadComponent: () => import ('./features/cashbook/ledger/ledger.component').then(c => c.LedgerComponent)},
  {path: 'budget', loadComponent: () => import ('./features/cashbook/budget/budget.component').then(c => c.BudgetComponent)},
  {path: 'help-center', loadComponent: () => import ('./core/system/help-center/help-center.component').then(c => c.HelpCenterComponent)},
  {path: 'vault', loadComponent: () => import ('./core/system/vault/vault.component').then(c => c.VaultComponent)},
  {path: 'vaultPassword', loadComponent: () => import ('./core/system/vault/vault-password/vault-password.component').then(c => c.VaultPasswordComponent)},

  {path: 'database', loadComponent: () => import ('./features/database/database.component').then(c => c.DatabaseComponent)},
  {path: 'invalidAccount', loadComponent: () => import ('./features/invalid-user/invalid-user.component').then(c => c.InvalidUserComponent)},
  {path: '**', loadComponent: () => import ('./features/not-found/not-found.component').then(c => c.NotFoundComponent)},









];
