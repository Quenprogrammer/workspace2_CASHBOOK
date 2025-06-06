import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {debounceTime} from 'rxjs';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './sitemap.component.html',
  styleUrl: './sitemap.component.css'
})
export class SitemapComponent {
  searchControl = new FormControl('');

  // Explicitly define the type
  filteredRoutes: { name: string; path: string; logo: string }[] = [];
  siteMap: { name: string; path: string; logo: string }[]
    = [

    { name: 'settings', path: '/settings', logo: 'settings.svg' },
    { name: 'auth', path: '/auth', logo: 'backupData.svg' },
    { name: 'home', path: '/home', logo: 'home.svg' },
    { name: 'Notifications', path: '/notifications', logo: 'notifications.svg' },
    { name: 'Security', path: '/home', logo: 'home.svg' },
    { name: 'Configuration', path: '/invoice', logo: 'configuration.svg' },
    { name: 'Invoice', path: '/invoice', logo: '' },
    { name: 'users', path: '/users', logo: 'users.svg' },
    { name: 'addContacts', path: '/addContacts', logo: 'contactus.svg' },
    { name: 'apps', path: '/apps', logo: 'apps.svg' },
    { name: 'payments', path: '/payments', logo: 'payments.svg' },
    { name: 'records', path: '/records', logo: 'records.svg' },
    { name: 'Add user', path: '/records', logo: 'registration.svg' },
    { name: 'transaction-history', path: '/transaction-history', logo: 'transactionHistory.svg' },
    { name: 'payment', path: '/payment', logo: 'payments.svg' },
    { name: 'backupData', path: '/backupData', logo: 'backup.svg' },
    { name: 'backupDataPassword', path: '/backupDataPassword', logo: 'backup.svg' },
    { name: 'createUser', path: '/createUser', logo: 'users.svg' },
    { name: 'statistics', path: '/statistics', logo: 'calculator.svg' },
    { name: 'Google', path: '/google', logo: 'google.svg' },
    { name: 'Microsoft', path: '/microsoft', logo: 'microsoft.svg' },
    { name: 'cashbook', path: '/cashbook', logo: '' },
    { name: 'dashboard', path: '/dashboard', logo: 'dashboard.svg' },
    { name: 'Windows view', path: '/windows', logo: 'windows.svg' },

    { name: 'vault', path: '/vault', logo: 'vault.svg' },
    { name: 'vaultPassword', path: '/vaultPassword', logo: 'vault.svg' },
    { name: 'Logs', path: '/database', logo: 'logs.svg' },
    { name: 'Profile', path: '/database', logo: 'profile.svg' },
    { name: 'database', path: '/database', logo: 'database.svg' }
  ];


  /* siteMap: { name: string; path: string; logo: string }[] = [
     { name: 'profile', path: 'sitemap/profile.svg', logo: '' },
     { name: 'settings', path: 'sitemap/settings.svg', logo: 'settings.svg' },
     { name: 'auth', path: 'sitemap/auth.svg', logo: '' },
     { name: 'invalidAccount', path: 'sitemap/invalidAccount.svg', logo: '' },
     { name: 'home', path: 'sitemap/home.svg', logo: 'home.svg' },
     { name: 'invoice', path: 'sitemap/invoice.svg', logo: 'invoice.svg' },
     { name: 'menu', path: 'sitemap/menu.svg', logo: '' },
     { name: 'users', path: 'sitemap/users.svg', logo: 'users.svg' },
     { name: 'addContacts', path: 'sitemap/addContacts.svg', logo: 'contactus.svg' },
     { name: 'apps', path: 'sitemap/apps.svg', logo: 'apps.svg' },
     { name: 'payments', path: 'sitemap/payments.svg', logo: 'payments.svg' },
     { name: 'cashbook-accounts', path: 'sitemap/cashbook-accounts.svg', logo: '' },
     { name: 'records', path: 'sitemap/records.svg', logo: '' },
     { name: 'transaction-history', path: 'sitemap/transaction-history.svg', logo: 'transactionHistory.svg' },
     { name: 'payment', path: 'sitemap/payment.svg', logo: 'payments.svg' },
     { name: 'backupData', path: 'sitemap/backupData.svg', logo: 'backup.svg' },
     { name: 'backupDataPassword', path: 'sitemap/backupDataPassword.svg', logo: 'backup.svg' },
     { name: 'createUser', path: 'sitemap/createUser.svg', logo: 'users.svg' },
     { name: 'statistics', path: 'sitemap/statistics.svg', logo: 'calculator.svg' },
     { name: 'cashbook', path: 'sitemap/cashbook.svg', logo: '' },
     { name: 'dashboard', path: 'sitemap/dashboard.svg', logo: 'dashboard.svg' },
     { name: 'ledger', path: 'sitemap/ledger.svg', logo: '' },
     { name: 'vault', path: 'sitemap/vault.svg', logo: 'vault.svg' },
     { name: 'vaultPassword', path: 'sitemap/vaultPassword.svg', logo: 'vault.svg' },
     { name: 'database', path: 'sitemap/database.svg', logo: 'database.svg' }
   ];
 */
  constructor() {
    // Listen to changes in the search input
    this.searchControl.valueChanges
      .pipe(debounceTime(300)) // Delay user input to optimize performance
      .subscribe(value => {
        this.filterRoutes(value || ''); // Ensure value is a string
      });

    // Initialize the filtered list with all items
    this.filteredRoutes = this.siteMap;
  }

  filterRoutes(searchText: string) {
    if (!searchText) {
      this.filteredRoutes = this.siteMap;
      return;
    }

    this.filteredRoutes = this.siteMap.filter(route =>
      route.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
