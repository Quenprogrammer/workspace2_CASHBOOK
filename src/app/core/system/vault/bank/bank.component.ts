import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';
import {DataServiceService} from '../../../../services/dataService';
  // adjust path as needed

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './bank.component.html',
  styleUrl: '../global.scss'
})
export class BankComponent {
  isModalOpen1: boolean = false;
  bankForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firestoreService: DataServiceService
  ) {
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
      const formData = this.bankForm.value;
      this.firestoreService.addData('banks', formData).then(() => {
        console.log('Bank data saved to Firestore');
        this.bankForm.reset();
        this.closeModal();
      }).catch(error => {
        console.error('Error saving bank data:', error);
      });
    } else {
      console.log('Invalid Form');
    }
  }

  closeModal(): void {
    this.isModalOpen1 = false;
  }

  openModal(): void {
    this.isModalOpen1 = true;
  }
}
