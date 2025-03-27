import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { Firestore, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore';

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
    return collectionData<Account>(accountCollection, { idField: 'id' }); // Using generics for type safety
  }

  /** ✅ Fetch debited transactions */
  getDebit(): Observable<Account[]> {
    const accountCollection = collection(this.firestore, 'debit'); // Collection name for debit transactions
    return collectionData<Account>(accountCollection, { idField: 'id' }); // Using generics for type safety
  }

  /** ✅ Delete an account entry from Firestore */
  async deleteAccount(accountId: string, collectionName: string): Promise<void> {
    const accountDocRef = doc(this.firestore, collectionName, accountId);
    try {
      await deleteDoc(accountDocRef);
      console.log('Account deleted successfully');
    } catch (error) {
      console.error('Error deleting account: ', error);
      throw new Error('Failed to delete account');
    }
  }

  /** ✅ Fetch both credited and debited transactions at once */
  getAllTransactions(): Observable<{ credited: Account[]; debited: Account[] }> {
    const credited$ = this.getAccounts();
    const debited$ = this.getDebit();
    return combineLatest([credited$, debited$]).pipe(
      map(([credited, debited]) => ({ credited, debited })) // Combine the two observables into one object
    );
  }
}
