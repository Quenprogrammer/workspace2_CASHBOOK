import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-bank',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent {
  bankForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bankForm = this.fb.group({
      accountHolder: this.fb.group({
        fullName: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
        email: ['', [Validators.required, Validators.email]]
      }),
      bankInfo: this.fb.group({
        bankName: ['', Validators.required],
        branchInfo: [''],
        swiftCode: ['', Validators.required],
        iban: ['', Validators.required],
        routingNumber: ['', Validators.required]
      }),
      accountType: ['', Validators.required],
      accountNumber: ['', Validators.required],
      security: this.fb.group({
        pin: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', Validators.required],
        securityQuestion: [''],
        securityAnswer: [''],
        twoFactorAuth: [false]
      }),
      transactionHistory: this.fb.group({
        transactions: [''],
        balance: [''],
        transactionDate: ['']
      }),
      bankingFeatures: this.fb.group({
        overdraftProtection: [''],
        creditLimit: [''],
        interestRates: [''],
        accountFees: ['']
      }),
      cardInfo: this.fb.group({
        cardNumber: [''],
        expiryDate: [''],
        cvv: [''],
        cardholderName: ['']
      })
    });
  }

  onSubmit() {
    if (this.bankForm.valid) {
      console.log('Form Data:', this.bankForm.value);
    } else {
      console.log('Invalid Form');
    }

}}
