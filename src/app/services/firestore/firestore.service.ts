import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, doc, docData, deleteDoc } from '@angular/fire/firestore';

export interface Account {
  id?: string; // ✅ Add ID to identify records for deletion
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

  /** ✅ Fetch credited transactions */
  getAccounts(): Observable<Account[]> {
    const accountCollection = collection(this.firestore, 'credit'); // Collection name
    return collectionData(accountCollection, { idField: 'id' }) as Observable<Account[]>;
  }

  /** ✅ Fetch debited transactions */
  getDebit(): Observable<Account[]> {
    const accountCollection = collection(this.firestore, 'debit'); // ✅ Corrected to 'debit'
    return collectionData(accountCollection, { idField: 'id' }) as Observable<Account[]>;
  }

  /** ✅ Delete an account entry from Firestore */
  deleteAccount(accountId: string): Promise<void> {
    const accountDocRef = doc(this.firestore, 'credit', accountId);
    return deleteDoc(accountDocRef);
  }

}
