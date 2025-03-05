import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {DocumentData} from '@angular/fire/compat/firestore';
export interface FirebaseDocument extends DocumentData {
  id: string; // Explicitly define the id property
  totalCredit: number; // Adjust fields based on Firestore structure
}
@Injectable({
  providedIn: 'root'
})
export class TotalsService {

  documents$: Observable<FirebaseDocument[]>;

  constructor(private firestore: Firestore) {
    const colRef = collection(this.firestore, 'totalCredit'); // Replace with your collection name
    this.documents$ = collectionData(colRef, { idField: 'id' }) as Observable<FirebaseDocument[]>;
  }
}
