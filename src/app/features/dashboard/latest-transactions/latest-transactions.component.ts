import {Component} from '@angular/core';
import {ViewDataDBService} from '../../../services/viewCollection/view-data-db.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {collectionData, Firestore} from '@angular/fire/firestore';
import {collection} from 'firebase/firestore';
interface Transaction {
  amount: string;
  date: string;
  description: string;
  payee: string;
  paymentMode: string;
  referenceNumber: string;
  type: string;
}

@Component({
  selector: 'app-latest-transactions',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './latest-transactions.component.html',
  styleUrl: './latest-transactions.component.css'
})
export class LatestTransactionsComponent {
  records: Transaction[] = []; // Define the records as an array of Transactions

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    const ref = collection(this.firestore, 'income');
    collectionData(ref, { idField: 'id' }).subscribe((data: Transaction[]) => {
      this.records = data; // Type-safe data
    });
  }
}
