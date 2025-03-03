import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AsyncPipe, CurrencyPipe, KeyValuePipe, NgForOf, NgIf, TitleCasePipe} from '@angular/common';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
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
  styleUrl: './total-debited.component.css'
})
export class TotalDebitedComponent implements OnInit{
  documents$: Observable<FirebaseDocument[]>;

  constructor(private firestore: Firestore) {
    const colRef = collection(this.firestore, 'totalDebit'); // Replace with your collection name
    this.documents$ = collectionData(colRef) as Observable<FirebaseDocument[]>;
  }

  ngOnInit(): void {}
}
