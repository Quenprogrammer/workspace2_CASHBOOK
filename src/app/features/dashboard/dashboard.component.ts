import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { collection, collectionData, Firestore, getCountFromServer } from '@angular/fire/firestore';
import { AsyncPipe, CurrencyPipe } from "@angular/common";
import {Router, RouterLink} from "@angular/router";

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
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CurrencyPipe,
    AsyncPipe,
    RouterLink,
    // Add AsyncPipe for async operations
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] // Fixed typo: styleUrl should be styleUrls
})
export class DashboardComponent /*implements OnInit*/ {
  firestore: Firestore = inject(Firestore);
  inquiriesCollection = collection(this.firestore, 'income');

  inquiriesMessage$: Observable<MessageInquiries[]> = collectionData(this.inquiriesCollection, { idField: 'id' }) as Observable<MessageInquiries[]>;

  totalCreditAmount: number = 0;
  totalDebitAmount: number = 0;
  balance: number = 0; // Add balance property
  totalDocuments: number = 0; // Property for total document count
  datasetSize: number = 0; // Property for dataset size

  constructor() {}

  ngOnInit() {
    // Fetch total document count
    getCountFromServer(this.inquiriesCollection).then((snapshot) => {
      this.totalDocuments = snapshot.data().count; // Set the total document count
      console.log('Total Documents:', this.totalDocuments); // Log total documents for debugging

      // Calculate dataset size (integer division)
      this.datasetSize = Math.floor(this.totalDocuments / 20000);
    }).catch((error) => {
      console.error("Error fetching document count: ", error);
    });

    // Subscribe to inquiries data for calculating totals
    this.inquiriesMessage$.subscribe(inquiries => {
      console.log('Inquiries:', inquiries); // Log inquiries for debugging

      // Calculate total amounts for credits and debits
      this.totalCreditAmount = inquiries
        .filter(inquiry => inquiry.type === 'credit')
        .reduce((sum, inquiry) => sum + (inquiry.amount || 0), 0);

      this.totalDebitAmount = inquiries
        .filter(inquiry => inquiry.type === 'debit')
        .reduce((sum, inquiry) => sum + (inquiry.amount || 0), 0);

      // Calculate the balance
      this.balance = this.totalCreditAmount - this.totalDebitAmount;
    });
  }


}
