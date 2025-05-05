import { Component } from '@angular/core';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastService} from '../../../services/toast-services';
import {NgForOf} from '@angular/common';
import {getDocs} from 'firebase/firestore';

@Component({
  selector: 'app-payment-methods',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.css'
})
export class PaymentMethodsComponent {

  bankForm!: FormGroup;
  bankAccounts: any[] = []; // Store fetched docs here

  constructor(private firestore: Firestore, private toastService: ToastService) {
    this.bankForm = new FormGroup({
      bankName: new FormControl('', [Validators.required]),
      accountNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      accountName: new FormControl('', [Validators.required]),
      accountType: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.loadBankAccounts();
  }
  async onSubmit() {
    if (this.bankForm.valid) {
      const bankData = this.bankForm.value;

      try {
        const bankCollection = collection(this.firestore, 'PAYMENT_METHODS');
        await addDoc(bankCollection, bankData);

        this.toastService.show('', 'Bank account saved successfully.', 'success');
        console.log('Bank account saved:', bankData);

        this.bankForm.reset();
      } catch (error) {
        console.error('Error saving bank account:', error);
        this.toastService.show('', 'Failed to save bank account.', 'danger');
      }
    } else {

    }
  }
  async loadBankAccounts() {
    try {
      const bankCollection = collection(this.firestore, 'PAYMENT_METHODS');
      const snapshot = await getDocs(bankCollection);

      this.bankAccounts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error loading bank accounts:', error);
    }
  }
  // Convenience getters for the form
  get bankName() { return this.bankForm.get('bankName'); }
  get accountNumber() { return this.bankForm.get('accountNumber'); }
  get accountName() { return this.bankForm.get('accountName'); }
  get accountType() { return this.bankForm.get('accountType'); }
}
