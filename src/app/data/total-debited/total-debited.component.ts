import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { AsyncPipe, CurrencyPipe, KeyValuePipe, NgForOf, NgIf } from '@angular/common';

interface FirebaseDocument {
  [key: string]: any; // Allows dynamic keys
}

@Component({
  selector: 'app-total-debited',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    KeyValuePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './total-debited.component.html',
  styleUrls: ['./total-debited.component.css'] // ✅ Fixed incorrect property name
})
export class TotalDebitedComponent implements OnInit {
  documents$: Observable<FirebaseDocument[]>;

  constructor(private firestore: Firestore) {
    const colRef = collection(this.firestore, 'totalDebit'); // ✅ Ensure this collection exists
    this.documents$ = collectionData(colRef) as Observable<FirebaseDocument[]>;
  }

  ngOnInit(): void {}
}
