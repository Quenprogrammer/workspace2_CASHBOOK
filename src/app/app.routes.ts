import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
/*import { authGuard } from './auth.guard';*/
export const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/start',
  },

  {path: 'start', loadComponent: () => import ('./core/system/start-up/start-up.component').then(c => c.StartUpComponent)},


  {path: 'debug', loadComponent: () => import ('./core/debug/debug.component').then(c => c.DebugComponent)},
  {path: 'profile', loadComponent: () => import ('./core/system/profile/profile.component').then(c => c.ProfileComponent)},
  {path: 'contactUs', loadComponent: () => import ('../aims/contact-us/contact-us.component').then(c => c.ContactUsComponent)},
  {path: 'terms', loadComponent: () => import ('../aims/terms-of-service/terms-of-service.component').then(c => c.TermsOfServiceComponent)},
  {path: 'FAQ', loadComponent: () => import ('../aims/faqs/faqs.component').then(c => c.FAQsComponent)},
  {path: 'subscription', loadComponent: () => import ('../aims/subscription/subscription.component').then(c => c.SubscriptionComponent)},
  {path: 'services', loadComponent: () => import ('../aims/services/services.component').then(c => c.ServicesComponent)},
  {path: 'technology', loadComponent: () => import ('../aims/technologies/technologies.component').then(c => c.TechnologiesComponent)},
  {path: 'industry', loadComponent: () => import ('../aims/industry/industry.component').then(c => c.IndustryComponent)},
  {path: 'webservices', loadComponent: () => import ('../aims/services/web-services/web-services.component').then(c => c.WebServicesComponent)},
  {path: 'database', loadComponent: () => import ('./core/system/database/database.component').then(c => c.DatabaseComponent)},
  {path: 'settings', loadComponent: () => import ('./core/system/settings/settings.component').then(c => c.SettingsComponent)},
  {path: 'auth', loadComponent: () => import ('./core/system/auth/auth.component').then(c => c.AuthComponent)},
  {path: 'invalidAccount', loadComponent: () => import ('./core/system/invalid-account/invalid-account.component').then(c => c.InvalidAccountComponent)},
  {path: 'config', loadComponent: () => import ('./core/system/config/config.component').then(c => c.ConfigComponent)},
  {path: 'home', component: HomeComponent},
   {path: 'menu', loadComponent: () => import ('./features/menu/menu.component').then(c => c.MenuComponent)},
   {path: 'inbox', loadComponent: () => import ('./features/menu/inbox/inbox.component').then(c => c.InboxComponent)},
  {path: 'users', loadComponent: () => import ('./features/users/users.component').then(c => c.UsersComponent)},
    {path: 'apps', loadComponent: () => import ('./features/apps/apps.component').then(c => c.AppsComponent)},
  {path: 'tax', loadComponent: () => import ('./features/apps/apps.component').then(c => c.AppsComponent)},
  {path: 'notepad', loadComponent: () => import ('./features/apps/notepad/notepad.component').then(c => c.NotepadComponent)},
  {path: 'calculator', loadComponent: () => import ('./features/apps/calculator/calculator.component').then(c => c.CalculatorComponent)},
  {path: 'appsHome', loadComponent: () => import ('./features/apps/app-home/app-home.component').then(c => c.AppHomeComponent)},
    {path: 'cashbook-accounts', loadComponent: () => import ('./features/create-account/create-account.component').then(c => c.CreateAccountComponent)},
  {path: 'sitemap', loadComponent: () => import ('./features/menu/sitemap/sitemap.component').then(c => c.SitemapComponent)},
  {path: 'company', loadComponent: () => import ('./features/company/company-profile/company-profile.component').then(c => c.CompanyProfileComponent)},
  {path: 'statistics', loadComponent: () => import ('./features/menu/statistics/statistics.component').then(c => c.StatisticsComponent)},
  {path: 'transaction-history', loadComponent: () => import ('./features/transaction-history/transaction-history.component').then(c => c.TransactionHistoryComponent)},
  {path: 'backupData', loadComponent: () => import ('./features/data/backup/backup.component').then(c => c.BackupComponent)},
  {path: 'backupDataPassword', loadComponent: () => import ('./features/data/backup-data-password/backup-data-password.component').then(c => c.BackupDataPasswordComponent)},
  {path: 'createUser', loadComponent: () => import ('./features/create-user/create-user.component').then(c => c.CreateUserComponent)},
  {path: 'invoice', loadComponent: () => import ('./features/invoice/invoice.component').then(c => c.InvoiceComponent)},
  {path: 'staffs', loadComponent: () => import ('./features/company/staffs/staffs.component').then(c => c.StaffsComponent)},
  {path: 'StaffsView', loadComponent: () => import ('./features/company/staffs/staff-view/staff-view.component').then(c => c.StaffViewComponent)},

  {path: 'cashbook', loadComponent: () => import ('./features/cashbook/cashbook.component').then(c => c.CashbookComponent)},
  {path: 'notifications', loadComponent: () => import ('./features/notifications/notifications.component').then(c => c.NotificationsComponent)},
  {path: 'menu', loadComponent: () => import ('./features/menu/menu.component').then(c => c.MenuComponent)},
  {path: 'dashboard', loadComponent: () => import ('./features/dashboard/dashboard.component').then(c => c.DashboardComponent)},
  {path: 'logs', loadComponent: () => import ('./core/system/logs/logs.component').then(c => c.LogsComponent)},




  {path: 'vault', loadComponent: () => import ('./core/system/vault/vault-password/vault-password.component').then(c => c.VaultPasswordComponent)},
  {path: 'vault-app', loadComponent: () => import ('./core/system/vault/vault.component').then(c => c.VaultComponent)},
  {path: 'fileUpload', loadComponent: () => import ('./core/system/vault/file-upload/file-upload.component').then(c => c.FileUploadComponent)},






  {path: 'Public_site_dashboard', loadComponent: () => import ('../publicSite/public-site-dashboard/public-site-dashboard.component').then(c => c.PublicSiteDashboardComponent)},
  {path: 'Public_site_homePage', loadComponent: () => import ('../publicSite/public-site-home-page/public-site-home-page.component').then(c => c.PublicSiteHomePageComponent)},
  {path: 'about', loadComponent: () => import ('../publicSite/public-siteabout/public-siteabout.component').then(c => c.PublicSiteaboutComponent)},




/*

  {path: 'account', loadComponent: () => import ('./core/system/vault/bank/bank.component').then(c => c.BankComponent)},
  {path: 'account', loadComponent: () => import ('./core/system/vault/code/code.component').then(c => c.CodeComponent)},
  {path: 'account', loadComponent: () => import ('./core/system/vault/contact-saver/contact-saver.component').then(c => c.ContactSaverComponent)},
  {path: 'account', loadComponent: () => import ('./core/system/vault/credentials/credentials.component').then(c => c.CredentialsComponent)},

*/




];
