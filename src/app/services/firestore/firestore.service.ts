import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {collection, collectionData, doc, docData, Firestore} from '@angular/fire/firestore';
export interface Account {
  amount: number;
  date: string;
  description: string;
  payee: string;
  paymentMode: string;
  referenceNumber: string;
  type: string;
}
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getAccounts(): Observable<Account[]> {
    const accountCollection = collection(this.firestore, 'credit'); // Collection name
    return collectionData(accountCollection, { idField: 'id' }) as Observable<Account[]>;
  }
  getDebit(): Observable<Account[]> {
    const accountCollection = collection(this.firestore, 'credit'); // Collection name
    return collectionData(accountCollection, { idField: 'id' }) as Observable<Account[]>;
  }
}
