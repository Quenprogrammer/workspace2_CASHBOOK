import { RouterLink } from "@angular/router";
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {AddInvoiceComponent} from './add-invoice/add-invoice.component';
/*import { NgxPaginationModule } from 'ngx-pagination'; // Import ngx-pagination module*/

interface invoiceData {
  id?: string;
  amountPaid: number;
  balanceOutstanding: number;
  customerName: string;
  invoice: string;
}

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    RouterLink,
    /* NgxPaginationModule, */ // Include ngx-pagination in the imports
    CurrencyPipe,
    NgForOf,
    AddInvoiceComponent
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent implements OnInit {
  items = [
    { title: "Total paid", detail: "Total received", amount: 0 },
    { title: "Total outstanding", detail: "Total receivable", amount: 0 },
    { title: "Total invoice", detail: "Total added", amount: 0 }
  ];

  firestore: Firestore = inject(Firestore);
  inquiriesCollection = collection(this.firestore, 'invoice');
  inquiriesMessage$: Observable<invoiceData[]> = collectionData(this.inquiriesCollection, { idField: 'id' }) as Observable<invoiceData[]>;

  invoice: invoiceData[] = [];
  loading: boolean = true;

  // Pagination settings
  currentPage: number = 1;
  itemsPerPage: number = 20;

  ngOnInit() {
    this.inquiriesMessage$.subscribe(inquiries => {
      this.invoice = inquiries;
      this.loading = false;
      console.log('Data Loaded:', this.invoice);
    });
  }

  // Method to calculate the data to display for the current page
  get paginatedInvoices() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.invoice.slice(startIndex, endIndex);
  }

  // Update the page number
  onPageChange(page: number) {
    this.currentPage = page;
  }

  protected readonly Math = Math;
}
