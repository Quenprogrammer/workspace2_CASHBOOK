import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
interface FirebaseDocument {
  totalAmount?: number;
}
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private totalDebitSubject = new BehaviorSubject<FirebaseDocument[]>([]);
  totalDebits$ = this.totalDebitSubject.asObservable(); // ✅ Exposed Observable

  constructor(private firestore: Firestore) {
    this.loadTotalDebits(); // Fetch and listen for updates
  }

  private loadTotalDebits(): void {
    const colRef = collection(this.firestore, 'totalDebit'); // ✅ Ensure this collection exists
    collectionData(colRef).subscribe((data: FirebaseDocument[]) => {
      this.totalDebitSubject.next(data); // ✅ Updates the BehaviorSubject
    });
  }
}
