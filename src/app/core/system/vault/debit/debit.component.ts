import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastService } from '../../../../services/toast-services';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { AsyncPipe, CurrencyPipe, NgClass, NgForOf, NgIf } from "@angular/common";
import { Observable } from "rxjs";
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";

export interface MessageInquiries {
  date: string; // Adjust the type based on your date format, e.g., string, Date, etc.
  referenceNumber: string;
  description: string;
  account: string;
  amount: number; // Assuming amount is a numeric value
  payee: string;
  paymentMode: string;
}
@Component({
  selector: 'app-debit',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    NgClass,

  ],
  templateUrl: './debit.component.html',
  styleUrl: './debit.component.scss'
})
export class DebitComponent implements OnInit{
  firestore: Firestore = inject(Firestore);
  generalMessageInquiries = collection(this.firestore, 'income');

  // Observable to store the inquiries
  inquiriesMessage$: Observable<MessageInquiries[]>;

  // Form group with the date automatically filled with the current date
  GeneralInquiriesMessage = new FormGroup({
    date: new FormControl(this.getCurrentDate(), [Validators.required]), // Set current date
    referenceNumber: new FormControl({ value: '', disabled: true }, [Validators.required]), // Read-only
    description: new FormControl('', [Validators.required]),
    account: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
    payee: new FormControl('', [Validators.required]),
    paymentMode: new FormControl('', [Validators.required])
  });

  randomNumber = 0;
  min = 100000000;
  max = 999999999;

  // Inject ToastService through the constructor
  constructor(private toastService: ToastService) {
    this.inquiriesMessage$ = collectionData(this.generalMessageInquiries, { idField: 'id' }) as Observable<MessageInquiries[]>;
  }

  ngOnInit() {
    this.generateRandomNumber(); // Generate random number on component initialization
  }

  // Method to get the current date in YYYY-MM-DD format
  getCurrentDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Returns YYYY-MM-DD
  }

  onSubmit() {
    if (this.GeneralInquiriesMessage.valid) {
      const dataToSubmit = {
        ...this.GeneralInquiriesMessage.value,
        referenceNumber: this.referenceNumber!.value, // Use non-null assertion operator
        type: 'debit' // Add the type field
      };

      addDoc(this.generalMessageInquiries, dataToSubmit)
        .then(() => {
          this.GeneralInquiriesMessage.reset();
          this.generateRandomNumber(); // Regenerate random number for the next submission
          this.GeneralInquiriesMessage.patchValue({ date: this.getCurrentDate() }); // Reset the date to the current date
          console.log('Transaction saved successfully');
          this.toastService.show('', 'Transaction saved successfully', 'success');
        })
        .catch((error) => {
          console.error('Error saving transaction:', error);
          this.toastService.show('', 'Error saving transaction', 'danger');
        });
    } else {
      console.log('Form is invalid');
      this.toastService.show('', 'Please fill in all required fields correctly.', 'danger');
    }
  }

  // Getters for form controls
  get date() {
    return this.GeneralInquiriesMessage.get('date');
  }

  get referenceNumber() {
    return this.GeneralInquiriesMessage.get('referenceNumber');
  }

  get description() {
    return this.GeneralInquiriesMessage.get('description');
  }

  get account() {
    return this.GeneralInquiriesMessage.get('account');
  }

  get amount() {
    return this.GeneralInquiriesMessage.get('amount');
  }

  get payee() {
    return this.GeneralInquiriesMessage.get('payee');
  }

  get paymentMode() {
    return this.GeneralInquiriesMessage.get('paymentMode');
  }

  // Generate a random number for the reference number
  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.GeneralInquiriesMessage.patchValue({ referenceNumber: this.randomNumber.toString() });
  }
}
