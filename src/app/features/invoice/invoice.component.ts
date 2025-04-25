import {Component, Input} from '@angular/core';
import {WindowsViewComponent} from '../../core/windows-view/windows-view.component';
import {
  address,
  companyName,
  companyPaymentChannels, country,
  email,
  LGA, logo,
  phone,
  stateLocated, website
} from '../data/companyInformation';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from '@ng-bootstrap/ng-bootstrap';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [

    NgIf,
    NgForOf,
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionButton,
    NgClass,
    FormsModule,
    NgbAccordionCollapse,
    NgbAccordionBody,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
  @Input() rentModules: { nameOfmodule: string; Options: { name: string; details: string; file: string }[] }[] = [];

  isModal2Open = false;
  protected readonly companyPaymentChannels = companyPaymentChannels;
  protected readonly email = email;
  protected readonly phone = phone;
  protected readonly companyName = companyName;
  protected readonly address = address;

  protected readonly stateLocated = stateLocated;
  protected readonly LGA = LGA;
  protected readonly country = country;
  protected readonly website = website;
  protected readonly logo = logo;
  closeModal(): void {

  }

  addModule(): void {
    this.rentModules.push({ nameOfmodule: '', Options: [] });
  }

  removeModule(moduleIndex: number): void {
    if (this.rentModules.length > moduleIndex) {
      this.rentModules.splice(moduleIndex, 1);
    }
  }

  /*** OPTION MANAGEMENT METHODS ***/
  addOption(moduleIndex: number): void {
    this.rentModules[moduleIndex].Options.push({ name: '', details: '', file: '' });
  }

  removeOption(moduleIndex: number, optionIndex: number): void {
    if (this.rentModules[moduleIndex].Options.length > optionIndex) {
      this.rentModules[moduleIndex].Options.splice(optionIndex, 1);
    }
  }

  isExpanded = false;

  expandAndPrint() {
    // Expand to full width
    this.isExpanded = true;

    // Trigger print
    setTimeout(() => {
      window.print();

      // Listen for print window close and revert layout
      this.onPrintClose();
    }, 500); // Delay to ensure the layout change is applied before printing

    // Revert to original size after 10 seconds
    setTimeout(() => {
      this.isExpanded = false;
    }, 3000); // 10 seconds delay
  }

  onPrintClose() {
    window.onafterprint = () => {
      // Revert layout to the original state immediately after printing
      this.isExpanded = false;
    };
  }
  invoiceForm!: FormGroup;
  currentDate = new Date().toLocaleDateString();

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.invoiceForm = this.fb.group({
      address: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      dueDate: ['', Validators.required],
      items: this.fb.array([]),
      professionalTax: [0, [Validators.required, Validators.min(0)]],
      subtotal: [{ value: 0, disabled: true }],
      total: [{ value: 0, disabled: true }]
    });

    this.addItem(); // Initialize with one item by default
  }

  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  addItem(): void {
    const itemGroup = this.fb.group({
      item: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      rate: [0, [Validators.required, Validators.min(0)]],
      amount: [{ value: 0, disabled: true }]
    });
    this.items.push(itemGroup);
  }

  updateItemAmount(index: number): void {
    const item = this.items.at(index);
    const quantity = item.get('quantity')?.value;
    const rate = item.get('rate')?.value;
    const amount = quantity * rate;
    item.get('amount')?.setValue(amount);
    this.calculateSubtotal();
  }

  calculateSubtotal(): void {
    const subtotal = this.items.controls.reduce((total, item) => total + item.get('amount')?.value, 0);
    this.invoiceForm.get('subtotal')?.setValue(subtotal);
    this.calculateTotal();
  }

  calculateTotal(): void {
    const subtotal = this.invoiceForm.get('subtotal')?.value;
    const taxPercentage = this.invoiceForm.get('professionalTax')?.value;
    const tax = (subtotal * taxPercentage) / 100;
    const total = subtotal + tax;
    this.invoiceForm.get('total')?.setValue(total);
  }

  async onSubmit(): Promise<void> {
    if (this.invoiceForm.valid) {
      const formData = this.invoiceForm.value;
      const invoiceData = {
        ...formData,
        createdAt: new Date(),
      };

      try {
        // Save the data to Firestore in the 'invoices' collection
        await addDoc(collection(this.firestore, 'invoices'), invoiceData);
        alert('Invoice submitted successfully!');
        this.invoiceForm.reset();
        this.addItem(); // Reset with one item after submission
      } catch (error) {
        console.error('Error saving data to Firestore:', error);
        alert('There was an error submitting the invoice.');
      }
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
