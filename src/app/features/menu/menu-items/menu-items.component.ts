import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {headingTextColor} from '../../../core/system/config';
export interface MenuItem {
  name: string;
  icon: string; // This should be a string representing the URL to the icon
  link: string; // This should be a string representing the router link
}
@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemsComponent {
  MENU_ITEMS: MenuItem[] = [
    { name: 'CashBook', icon: 'interface-control-svgrepo-com.svg', link: '/cashbook' },
    { name: 'history', icon: 'ddos-protection-svgrepo-com.svg', link: '/transaction-history' },
    { name: 'Dashboard', icon: 'data-analysis-svgrepo-com.svg', link: '/dashboard' },
    { name: 'Map', icon: 'touch-click-svgrepo-com.svg', link: '/records' },
    { name: 'Invoice', icon: 'machine-vision-svgrepo-com.svg', link: '/invoice' },
    { name: 'Vault', icon: 'cloud-backup-svgrepo-com.svg', link: '/vault' },

    { name: 'Apps', icon: 'mobile-app-svgrepo-com.svg', link: '/appsHome' },
    { name: 'Company', icon: 'mobile-app-svgrepo-com.svg', link: '/company' },

    { name: 'backup', icon: 'cloud-acceleration-svgrepo-com.svg', link: '/backupDataPassword' },

    { name: 'Payments', icon: 'dns-svgrepo-com.svg', link: '/payments' },
    { name: 'Notifications', icon: 'mail-reception-svgrepo-com.svg', link: '/notifications' },
    { name: 'Settings', icon: 'system-settings-svgrepo-com.svg', link: '/settings' },
    { name: 'API Interface', icon: 'api-interface-svgrepo-com.svg', link: '/statUp' },
    { name: 'Logs', icon: 'availability-svgrepo-com.svg', link: '/logs' },
    { name: 'Whatsapp', icon: 'apps/Whatsapp.png', link: '/logs' },



  ];

  protected readonly headingTextColor = headingTextColor;
}
