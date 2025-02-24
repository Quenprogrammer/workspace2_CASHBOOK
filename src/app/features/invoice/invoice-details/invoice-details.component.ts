import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, doc, docData, setDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { deleteDoc } from '@angular/fire/firestore';
import { RouterLink } from "@angular/router";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe,
    NgIf,
    FormsModule,
    NgForOf
  ],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss'
})
export class InvoiceDetailsComponent implements OnInit {
  invoice: any = null;
  firestore: Firestore = inject(Firestore);
  router: Router = inject(Router);
  isEditing: boolean = false; // Flag for edit mode

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const invoiceId = this.route.snapshot.queryParamMap.get('id');
    if (invoiceId) {
      this.fetchInvoiceDetails(invoiceId);
    }
  }

  // Fetch the invoice details from Firestore using the 'id'
  fetchInvoiceDetails(id: string): void {
    const invoiceRef = doc(this.firestore, `invoice/${id}`);
    docData(invoiceRef, { idField: 'id' }).subscribe((data: any) => {
      this.invoice = data;
      console.log('Invoice details:', this.invoice);
    });
  }

  // Toggle between view and edit modes
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  // Save changes to the invoice
  updateInvoice() {
    if (this.invoice?.id) {
      const invoiceRef = doc(this.firestore, `invoice/${this.invoice.id}`);
      setDoc(invoiceRef, this.invoice, { merge: true })
        .then(() => {
          alert('Invoice updated successfully!');
          this.toggleEdit(); // Exit edit mode
        })
        .catch((error) => {
          console.error('Error updating invoice: ', error);
          alert('There was an error updating the invoice.');
        });
    }
  }

  // Delete the invoice
  deleteInvoice() {
    if (this.invoice?.id) {
      const confirmed = window.confirm('Are you sure you want to delete this invoice?');
      if (confirmed) {
        const invoiceRef = doc(this.firestore, `invoice/${this.invoice.id}`);
        deleteDoc(invoiceRef).then(() => {
          alert('Invoice deleted successfully!');
          this.router.navigate(['/invoice']);
        }).catch((error) => {
          console.error('Error deleting invoice: ', error);
          alert('There was an error deleting the invoice.');
        });
      }
    }
  }

  calculateTotalCost(): number {
    return this.invoice?.items?.reduce((total: number, item: any) => total + item.quantity * item.price, 0) || 0;
  }


  calculateOutstandingBalance(): number {
    const totalCost = this.calculateTotalCost();
    return totalCost - (this.invoice?.amountPaid || 0);
  }

  addItem() {
    // Add a new empty item to the list
    this.invoice.items = this.invoice.items || [];
    this.invoice.items.push({ name: '', quantity: 1, price: 0 });
  }

  removeItem(index: number) {
    // Remove the item at the specified index
    if (this.invoice.items && this.invoice.items.length > index) {
      this.invoice.items.splice(index, 1);
    }
  }


}
