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
  selector: 'app-ledger',
  standalone: true,
  imports: [
    CurrencyPipe,
    FormsModule,
    NgForOf
  ],
  templateUrl: './ledger.component.html',
  styleUrl: './ledger.component.scss'
})
export class LedgerComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  inquiriesCollection = collection(this.firestore, 'income');

  inquiriesMessage$: Observable<MessageInquiries[]> = collectionData(this.inquiriesCollection, { idField: 'id' }) as Observable<MessageInquiries[]>;

  filteredInquiries: MessageInquiries[] = []; // Array to hold filtered inquiries
  filterType: string = ''; // Type of filter (debit or credit)
  searchQuery: string = ''; // Query for searching by account name

  totalCreditAmount: number = 0;
  totalDebitAmount: number = 0;
  balance: number = 0; // Add balance property

  constructor() {}

  ngOnInit() {
    this.inquiriesMessage$.pipe(take(1)).subscribe(inquiries => {
      this.filteredInquiries = inquiries; // Store all inquiries initially
      console.log('Inquiries:', inquiries); // Log inquiries for debugging

      // Calculate total amounts for credits and debits
      this.calculateTotals(inquiries);
    });
  }

  calculateTotals(inquiries: MessageInquiries[]) {
    this.totalCreditAmount = inquiries
      .filter(inquiry => inquiry.type === 'credit')
      .reduce((sum, inquiry) => sum + (typeof inquiry.amount === 'number' ? inquiry.amount : Number(inquiry.amount || 0)), 0);

    this.totalDebitAmount = inquiries
      .filter(inquiry => inquiry.type === 'debit')
      .reduce((sum, inquiry) => sum + (typeof inquiry.amount === 'number' ? inquiry.amount : Number(inquiry.amount || 0)), 0);

    // Calculate the balance
    this.balance = this.totalCreditAmount - this.totalDebitAmount;

    // Log total amounts and balance for debugging
    console.log('Total Credit Amount:', this.totalCreditAmount);
    console.log('Total Debit Amount:', this.totalDebitAmount);
    console.log('Balance:', this.balance);
  }

  filterByType(type: string) {
    this.filterType = type; // Set the filter type to 'debit' or 'credit'
    this.applyFilter(); // Apply the filter to update the displayed inquiries
  }

  applyFilter() {
    this.inquiriesMessage$.pipe(take(1)).subscribe(inquiries => {
      this.filteredInquiries = inquiries.filter(inquiry => {
        const matchesType = this.filterType ? inquiry.type === this.filterType : true;
        const matchesAccount = inquiry.account.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesType && matchesAccount;
      });
      console.log('Filtered Inquiries:', this.filteredInquiries);
    });
  }

  // Method to search by account name
  searchByAccountName(query: string) {
    this.searchQuery = query; // Update the search query
    this.applyFilter(); // Reapply the filter to update displayed inquiries
  }

  // Method to delete an inquiry
  deleteInquiry(inquiryId: string | undefined) {
    if (inquiryId) {
      const inquiryDocRef = doc(this.firestore, `income/${inquiryId}`);
      deleteDoc(inquiryDocRef)
        .then(() => {
          console.log('Inquiry deleted successfully');
          // Optionally refresh the inquiries
          this.ngOnInit(); // Re-fetch inquiries after deletion
        })
        .catch((error) => {
          console.error('Error deleting inquiry: ', error);
        });
    }
  }
}
