import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ValidationErrors,
  ValidatorFn, AbstractControl, FormsModule, ReactiveFormsModule,
} from '@angular/forms';
import {Firestore, collection, addDoc, collectionData} from '@angular/fire/firestore';
import {Router, RouterLink,} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {FilterPipe} from "../../../shared/filter.pipe";
import { ViewDataComponent } from '../view-data/view-data.component';

@Component({
  selector: 'app-add-invoice',
  standalone: true,
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss'],
  imports: [
    NgForOf,
    FormsModule,
    FilterPipe,
    AsyncPipe,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class AddInvoiceComponent implements OnInit {
  invoiceForm: FormGroup;
  isLoading = false;
  isDisabled = true;
  searchTerm: string = ''; // Search term for filtering customers
  customers$: Observable<any[]>; // Observable for customer data
  formData: any = null; // Store form data here

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.invoiceForm = this.fb.group({
      customerName: ['', Validators.required],
      invoice: ['', Validators.required],
      amountPaid: [0, [Validators.required, Validators.min(0)]],
      balanceOutstanding: [{ value: 0, disabled: true }],
      items: this.fb.array([]),
    }, {
      validators: [this.amountPaidValidator()],
    });

    this.customers$ = this.getCustomers();
    this.invoiceForm.valueChanges.subscribe(() => {
      this.calculateOutstandingBalance();
    });
  }

  ngOnInit(): void {}

  // New method to push data to the ViewDataComponent
  pushData(): void {
    this.formData = this.invoiceForm.value; // Store the form data
    this.openViewDataModal();
  }

  openViewDataModal() {
    const modalRef = this.modalService.open(ViewDataComponent); // Open the ViewDataComponent in a modal
    modalRef.componentInstance.formData = this.formData; // Pass the form data to the ViewDataComponent
  }

  openScrollableContent(content: any): void {
    this.modalService.open(content, { size: 'lg', scrollable: true });
  }

  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  addItem(): void {
    this.items.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [1, [Validators.required, Validators.min(1)]],
        price: [0, [Validators.required, Validators.min(0)]],
      })
    );
    this.calculateOutstandingBalance();
  }

  removeItem(index: number): void {
    const items = this.invoiceForm.get('items') as FormArray;
    items.removeAt(index);
  }

  calculateOutstandingBalance(): void {
    const totalItemPrice = this.items.controls.reduce((total, item) => {
      const price = item.get('price')?.value || 0;
      const quantity = item.get('quantity')?.value || 0;
      return total + price * quantity;
    }, 0);

    const amountPaid = this.invoiceForm.controls['amountPaid'].value || 0;
    const balanceOutstanding = totalItemPrice - amountPaid;

    this.invoiceForm.controls['balanceOutstanding'].setValue(balanceOutstanding);
  }

  addInvoice(): void {
    if (this.invoiceForm.valid) {
      this.isLoading = true;
      const invoiceData = this.invoiceForm.value;
      console.log('Invoice data to be added:', invoiceData);

      const invoicesCollection = collection(this.firestore, 'invoice');
      addDoc(invoicesCollection, invoiceData)
        .then(() => {
          alert('Invoice added successfully!');
          this.router.navigate(['/invoice-list']);
          this.resetForm();
        })
        .catch((error) => {
          console.error('Error adding invoice:', error);
          alert('Failed to add invoice. Please try again.');
        })
        .finally(() => {
          this.isLoading = false;
        });
    } else {
      alert('Please fill out all required fields.');
    }
  }

  private amountPaidValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const items = formGroup.get('items') as FormArray;
      const totalItemPrice = items?.controls.reduce((total, item) => {
        const price = item.get('price')?.value || 0;
        const quantity = item.get('quantity')?.value || 0;
        return total + price * quantity;
      }, 0);

      const amountPaid = formGroup.get('amountPaid')?.value || 0;

      return amountPaid > totalItemPrice
        ? { amountPaidExceedsTotal: true }
        : null;
    };
  }

  private resetForm(): void {
    this.invoiceForm.reset({
      customerName: '',
      invoice: '',
      amountPaid: 0,
      balanceOutstanding: 0,
    });

    const items = this.invoiceForm.get('items') as FormArray;
    while (items.length) {
      items.removeAt(0);
    }
  }

  private getCustomers(): Observable<any[]> {
    const customersCollection = collection(this.firestore, 'customers');
    return collectionData(customersCollection, { idField: 'id' });
  }

  selectCustomer(customer: any): void {
    this.invoiceForm.get('customerName')?.setValue(customer.customerName);
    this.modalService.dismissAll();
  }
}
