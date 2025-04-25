import { Component } from '@angular/core';
import { ViewDataDBService } from '../../../services/view-data-db.service';
import { DecimalPipe, NgForOf, NgIf } from '@angular/common';
import {FormsModule} from '@angular/forms';

interface InvoiceFormValue {
  id?: string; // important for delete
  address: string;
  name: string;
  invoiceDate: string;
  dueDate: string;
  items: InvoiceItem[];
  professionalTax: number;
  subtotal: number;
  total: number;
}

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-all-invoice',
  standalone: true,
  imports: [NgForOf, DecimalPipe, NgIf, FormsModule],
  templateUrl: './all-invoice.component.html',
  styleUrl: './all-invoice.component.css'
})
export class AllInvoiceComponent {
  invoice: InvoiceFormValue[] = [];
  filteredInvoice: InvoiceFormValue[] = [];
  searchTerm: string = '';

  constructor(private firebaseService: ViewDataDBService) {}

  ngOnInit(): void {
    this.firebaseService.getCollectionWithIds<InvoiceFormValue>('invoice').subscribe(data => {
      this.invoice = data;
      this.filteredInvoice = data;
    });
  }

  searchInvoices(): void {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredInvoice = this.invoice;
      return;
    }

    this.filteredInvoice = this.invoice.filter(inv =>
      inv.name?.toLowerCase().includes(term) ||
      inv.address?.toLowerCase().includes(term) ||
      inv.invoiceDate?.toLowerCase().includes(term) ||
      inv.dueDate?.toLowerCase().includes(term)
    );
  }

  deleteInvoice(id: string | undefined): void {
    if (!id) return;
    if (confirm('Are you sure you want to delete this invoice?')) {
      this.firebaseService.deleteDocument('invoice', id).then(() => {
        this.invoice = this.invoice.filter(inv => inv.id !== id);
        this.filteredInvoice = this.filteredInvoice.filter(inv => inv.id !== id);
      });
    }
  }
}
