import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import {CurrencyPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import { FormsModule } from "@angular/forms";
import { take } from 'rxjs/operators';

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
  imports: [NgForOf, CurrencyPipe, FormsModule, NgStyle, NgIf],
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  inquiriesCollection = collection(this.firestore, 'income');

  inquiriesMessage$: Observable<MessageInquiries[]> = collectionData(this.inquiriesCollection, { idField: 'id' }) as Observable<MessageInquiries[]>;

  transactions: MessageInquiries[] = []; // To hold the loaded transactions
  loading: boolean = true; // Flag to track loading state

  ngOnInit() {
    this.inquiriesMessage$.subscribe(inquiries => {
      this.transactions = inquiries; // Load all transactions into the array
      this.loading = false; // Set loading to false after data is fetched
      console.log('Loaded Transactions:', this.transactions); // Debugging output
    });
  }
}
