import { Component } from '@angular/core';

@Component({
  selector: 'app-crypto-token',
  standalone: true,
  imports: [],
  templateUrl: './crypto-token.component.html',
  styleUrl: './crypto-token.component.css'
})
export class CryptoTokenComponent {
  tokenForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tokenForm = this.fb.group({
      tokenName: ['', [Validators.required]],
      tokenSymbol: ['', [Validators.required, Validators.maxLength(10)]],
      contractAddress: ['', [Validators.required]],
      blockchainNetwork: ['', [Validators.required]],
      totalSupply: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      decimals: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      ownerAddress: ['', [Validators.required]],
      tokenStandard: ['', [Validators.required]],
      tokenUtility: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.tokenForm.valid) {
      console.log('Token Data:', this.tokenForm.value);
      alert('Token information submitted successfully!');
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
