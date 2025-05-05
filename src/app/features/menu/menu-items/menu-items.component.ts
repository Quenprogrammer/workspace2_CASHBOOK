import {Component, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

import {NgForOf, NgIf} from "@angular/common";
import {TextComponent} from '../../../core/components/text/text.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TimeComponent} from '../time/time.component';
export interface MenuItem {
  name: string;
  icon: string; // This should be a string representing the URL to the icon
  link: string; // This should be a string representing the router link
}
@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    TextComponent,
    FormsModule,
    ReactiveFormsModule,
    NgForOf,
    TimeComponent
  ],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemsComponent {
  MENU_ITEMS: MenuItem[] = [
    {name: 'Dashboard', icon: 'data-analysis-svgrepo-com.svg', link: '/dashboard'},
    {name: 'Data', icon: 'cloud-acceleration-svgrepo-com.svg', link: '/backupData'},
    {name: 'Accounts', icon: 'cloud-acceleration-svgrepo-com.svg', link: '/viewAccounts'},
    {name: 'CashBook', icon: 'interface-control-svgrepo-com.svg', link: '/cashbook'},
    {name: 'Payment methods', icon: 'interface-control-svgrepo-com.svg', link: '/cashbook'},
    {name: 'Statistics', icon: 'icons/statis.svg', link: '/statistics'},

    {name: 'history', icon: 'ddos-protection-svgrepo-com.svg', link: '/transaction-history'},

    {name: 'Public Site', icon: 'bg/inbox.svg', link: '/Public_site_dashboard'},
    {name: 'SiteMap', icon: 'touch-click-svgrepo-com.svg', link: '/sitemap'},
    {name: 'Inbox', icon: 'mail-reception-svgrepo-com.svg', link: '/records'},
    {name: 'invoice', icon: 'machine-vision-svgrepo-com.svg', link: '/invoice'},
    {name: 'Vault', icon: 'cloud-backup-svgrepo-com.svg', link: '/vault'},

    {name: 'Apps', icon: 'mobile-app-svgrepo-com.svg', link: '/appsHome'},
    {name: 'Company', icon: 'mobile-app-svgrepo-com.svg', link: '/company'},
    {name: 'Recycle Bin', icon: 'mobile-app-svgrepo-com.svg', link: '/company'},


    {name: 'Notifications', icon: 'gif/2.svg', link: '/notifications'},
    {name: 'Settings', icon: 'system-settings-svgrepo-com.svg', link: '/settings'},
    {name: 'API Interface', icon: 'api-interface-svgrepo-com.svg', link: '/statUp'},
    {name: 'Logs', icon: 'availability-svgrepo-com.svg', link: '/logs'},


  ];

}
