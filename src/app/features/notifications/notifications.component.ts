import {Component, inject, OnInit} from '@angular/core';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    JsonPipe
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit{
  firestore = inject(Firestore);
  documents$!: Observable<any[]>; // Use the definite assignment operator

  ngOnInit(): void {
    const myCollection = collection(this.firestore, 'Notifications');
    this.documents$ = collectionData(myCollection, { idField: 'id' });
  }
}
