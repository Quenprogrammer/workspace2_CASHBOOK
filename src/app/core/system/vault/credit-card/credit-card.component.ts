import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.css'
})
export class CreditCardComponent {
  creditCardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.creditCardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      cardholderName: ['', [Validators.required, Validators.minLength(3)]],
      expirationDate: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])/(\\d{2})')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      billingAddress: ['', Validators.required],
      creditLimit: ['', [Validators.required, Validators.min(1000)]],

      accountNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]],

      twoFactorAuth: [false],
      pin: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    });
  }

  onSubmit() {
    if (this.creditCardForm.valid) {
      console.log('Credit Card Form Data:', this.creditCardForm.value);
    } else {
      console.log('Invalid Form');
    }
  }
}
