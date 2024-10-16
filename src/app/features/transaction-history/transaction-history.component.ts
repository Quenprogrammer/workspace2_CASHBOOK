import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { collection, collectionData, Firestore, deleteDoc, doc } from '@angular/fire/firestore';
import { AsyncPipe, CurrencyPipe, NgForOf, NgIf } from "@angular/common";
import { take } from 'rxjs/operators';
import {FormsModule} from "@angular/forms";

interface MessageInquiries {
  id?: string;
  date: string;
  referenceNumber: string;
  description: string;
  account: string;
  amount: number;
  payee: string;
  paymentMode: string;
  type: string; // This will be 'credit' or 'debit'
}

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [
    NgForOf,

    CurrencyPipe,

    FormsModule
  ],
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  inquiriesCollection = collection(this.firestore, 'income');

  inquiriesMessage$: Observable<MessageInquiries[]> = collectionData(this.inquiriesCollection, { idField: 'id' }) as Observable<MessageInquiries[]>;

  transactions: MessageInquiries[] = []; // To hold the loaded transactions

  ngOnInit() {
    this.inquiriesMessage$.subscribe(inquiries => {
      this.transactions = inquiries; // Load all transactions into the array
      console.log('Loaded Transactions:', this.transactions); // Debugging output
    });
  }
}
