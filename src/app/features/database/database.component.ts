import { Component } from '@angular/core';

import {NgForOf, NgIf} from '@angular/common';
import {LogsComponent} from './logs/logs.component';
import {HomepageComponent} from '../ideas/homepage/homepage.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UsersComponent} from './users/users.component';


import {StorageComponent} from './storage/storage.component';
import {FirebaseComponent} from './firebase/firebase.component';





@Component({
  selector: 'app-database',
  standalone: true,
  imports: [


    NgForOf,
    NgIf,
    LogsComponent,

    NotificationsComponent,
    UsersComponent,


    StorageComponent,
    FirebaseComponent,



  ],
  templateUrl: './database.component.html',
  styleUrl: './database.component.scss'
})
export class DatabaseComponent {
  databaseMenu = [


    { name: 'Notifications', image: 'logos/2.svg', component: 'notifications' },
    { name: 'Storage', image: 'logos/3.svg', component: 'storage' },
    { name: 'Users', image: 'logos/4.svg', component: 'users' },
    { name: 'Firebase', image: 'logos/firebase.png', component: 'firebase' },
    { name: 'Logs', image: 'logos/5.svg', component: 'logs' },

  ];

  activeComponent: string = '';

  showComponent(componentName: string): void {
    this.activeComponent = componentName;
  }

  trackByName(index: number, item: any): string {
    return item.name;
  }

}
