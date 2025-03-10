import {Component, inject} from '@angular/core';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
export interface FirestoreDocument {
  id?: string;
  name: string;
  value: number;
 unit: string;
}

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  firestore: Firestore = inject(Firestore); // ✅ Inject Firestore directly
  documents$: Observable<FirestoreDocument[]>; // ✅ Use the correct interface

  constructor() {
    const colRef = collection(this.firestore, 'config'); // Replace with your Firestore collection name
    this.documents$ = collectionData(colRef, { idField: 'id' }) as Observable<FirestoreDocument[]>;
  }

  ngOnInit(): void {}
}
