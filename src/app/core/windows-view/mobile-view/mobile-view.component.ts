import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';

export interface DashboardButton {
  col: string;
  height: string;
  class: string;
  label: string;
  link: string;
}

@Component({
  selector: 'app-mobile-view',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './mobile-view.component.html',
  styleUrl: './mobile-view.component.css'
})
export class MobileViewComponent {
  dashboardButtons: DashboardButton[] = [
    { col: 'col-12 mb-1', height: '110px', class: 'btn-big blue-nav', label: 'Home', link: '/home' },
    { col: 'col-6', height: '55px', class: 'btn-big blue', label: 'Menu', link: '/menu' },
    { col: 'col-6', height: '55px', class: 'btn-big green', label: 'Inbox', link: '/inbox' },
    { col: 'col-12 mb-1', height: '110px', class: 'btn-big red', label: 'Users', link: '/users' },
    { col: 'col-6', height: '55px', class: 'btn-big purple', label: 'Apps', link: '/apps' },
    { col: 'col-6', height: '55px', class: 'btn-big yellow', label: 'Tax', link: '/tax' },
    { col: 'col-12 mb-1', height: '110px', class: 'btn-big ash', label: 'Notepad', link: '/notepad' },
    { col: 'col-12 mb-1', height: '110px', class: 'btn-big red', label: 'Calculator', link: '/calculator' },
    { col: 'col-3 mb-1', height: '110px', class: 'btn-big red', label: 'Apps Home', link: '/appsHome' },
    { col: 'col-3 mb-1', height: '110px', class: 'btn-big orange', label: 'Cashbook Accounts', link: '/cashbook-accounts' },
    { col: 'col-3 mb-1', height: '110px', class: 'btn-big red', label: 'Sitemap', link: '/sitemap' },
    { col: 'col-3 mb-1', height: '110px', class: 'btn-big green', label: 'Company', link: '/company' },
    { col: 'col-4 mb-1', height: '110px', class: 'btn-big red', label: 'Statistics', link: '/statistics' },
    { col: 'col-8 mb-1', height: '110px', class: 'btn-big red', label: 'Transaction History', link: '/transaction-history' },
    { col: 'col-12 mb-1', height: '110px', class: 'btn-big green-bright', label: 'Backup Data', link: '/backupData' },
    { col: 'col-4 mb-1', height: '110px', class: 'btn-big green', label: 'Backup Password', link: '/backupDataPassword' },
    { col: 'col-4 mb-1', height: '110px', class: 'btn-big red', label: 'Create User', link: '/createUser' },
    { col: 'col-4 mb-1', height: '110px', class: 'btn-big orange', label: 'Invoice', link: '/invoice' },
    { col: 'col-6', height: '55px', class: 'btn-big red', label: 'Staffs', link: '/staffs' },
    { col: 'col-6', height: '55px', class: 'btn-big red', label: 'Staff View', link: '/StaffsView' },
    { col: 'col-6', height: '55px', class: 'btn-big red', label: 'Cashbook', link: '/cashbook' },
    { col: 'col-6', height: '55px', class: 'btn-big red', label: 'Notifications', link: '/notifications' },
    { col: 'col-6 g-0 mb-1 mt-1', height: '110px', class: 'btn-big red', label: 'Logs', link: '/logs' }
  ];

  buttons: DashboardButton[] = this.dashboardButtons;
}
