import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-crypto-token',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './crypto-token.component.html',
  styleUrl: './crypto-token.component.css'
})
export class CryptoTokenComponent {
  tokenForm!: FormGroup;

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.tokenForm = this.fb.group({
      tokenName: ['', [Validators.required]],
      tokenSymbol: ['', [Validators.required, /*Validators.maxLength(10)*/]],
      contractAddress: ['', [Validators.required]],
      blockchainNetwork: ['', [Validators.required]],
      totalSupply: ['', [Validators.required, /*Validators.pattern('^[0-9]+$')*/]],
      decimals: ['', [Validators.required, /*Validators.pattern('^[0-9]+$')*/]],
      ownerAddress: ['', [Validators.required]],
      tokenStandard: ['', [Validators.required]],
      tokenUtility: ['']
    });
  }

  async onSubmit(): Promise<void> {
    if (this.tokenForm.valid) {
      const formData = {
        tokenName: this.tokenForm.value.tokenName,
        tokenSymbol: this.tokenForm.value.tokenSymbol,
        contractAddress: this.tokenForm.value.contractAddress,
        blockchainNetwork: this.tokenForm.value.blockchainNetwork,
        totalSupply: this.tokenForm.value.totalSupply,
        decimals: this.tokenForm.value.decimals,
        ownerAddress: this.tokenForm.value.ownerAddress,
        tokenStandard: this.tokenForm.value.tokenStandard,
        tokenUtility: this.tokenForm.value.tokenUtility || null,
        submittedAt: new Date()
      };

      try {
        // Save data to Firestore with auto-generated document ID
        await addDoc(collection(this.firestore, 'crypto-tokens'), formData);
        console.log('Crypto token data saved to Firestore');
        alert('Token information submitted successfully!');

        // Reset form after submission
        this.tokenForm.reset();
      } catch (error) {
        console.error('Error saving data to Firestore:', error);
        alert('There was an error submitting the form.');
      }
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
