import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-crypto-wallet',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './crypto-wallet.component.html',
  styleUrl: './crypto-wallet.component.css'
})
export class CryptoWalletComponent {
  cryptoWalletForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cryptoWalletForm = this.fb.group({
      walletName: ['', [Validators.required]],
      walletAddress: ['', [Validators.required]],
      privateKey: ['', [Validators.required]],
      publicKey: ['', [Validators.required]],
      seedPhrase: ['', [Validators.required, Validators.minLength(12)]],
      walletType: ['', [Validators.required]],
      blockchainNetwork: ['', [Validators.required]],
      multiSignature: ['', [Validators.required]],
      twoFactorAuth: ['', [Validators.required]],
      backupCodes: [''],
      linkedEmail: ['', [Validators.required, Validators.email]],
      linkedPhoneNumber: ['', [Validators.pattern('^[0-9]+$')]],
      walletBalance: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,8})?$')]],
      recentTransactions: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.cryptoWalletForm.valid) {
      console.log('Crypto Wallet Data:', this.cryptoWalletForm.value);
      alert('Crypto Wallet information submitted successfully!');
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
