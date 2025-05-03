import {Component} from '@angular/core';
import {ViewDataDBService} from '../../../services/viewCollection/view-data-db.service';
import {AsyncPipe, DatePipe, NgForOf, NgIf} from '@angular/common';
import {collectionData, Firestore, Timestamp} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {collection} from 'firebase/firestore';
interface Notification {
  id?: string;
  message: string;
  status: string;
  time: Timestamp;
  date: Timestamp;
  type: string;
  user: string;
}

@Component({
  selector: 'app-latest-notifications',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './latest-notifications.component.html',
  styleUrl: './latest-notifications.component.css'
})
export class LatestNotificationsComponent {
  notifications$!: Observable<Notification[]>;

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    const notificationsRef = collection(this.firestore, 'NOTIFICATIONS');
    this.notifications$ = collectionData(notificationsRef, { idField: 'id' }) as Observable<Notification[]>;
  }
}
