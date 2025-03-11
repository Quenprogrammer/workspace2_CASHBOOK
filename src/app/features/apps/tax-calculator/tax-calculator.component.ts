import { Component } from '@angular/core';
import {AsyncPipe, DecimalPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tax-calculator',
  standalone: true,
  imports: [
    DecimalPipe,
    FormsModule,
    AsyncPipe
  ],
  templateUrl: './tax-calculator.component.html',
  styleUrl: './tax-calculator.component.css'
})
export class TaxCalculatorComponent {

  depositPercentage: number = 25;
 propertyPrices: number = 25;
  interestRate: number = 3.5;
  amortizationYears: number = 25;

  get propertyPrice(): number {
    if (!this.propertyPrices) return 0;

    // Ensure it's a number (Remove € symbol and commas)
    let price = this.propertyPrices.toString().replace(/[€,]/g, '');
    return parseFloat(price) || 0;
  }


  get depositAmount(): number {
    return (this.propertyPrice * this.depositPercentage) / 100;
  }

  get loanAmount(): number {
    return this.propertyPrice - this.depositAmount;
  }

  get loanPercentage(): number {
    return (this.loanAmount / this.propertyPrice) * 100;
  }

  get interestAmount(): number {
    const monthlyRate = this.interestRate / 100 / 12;
    const totalPayments = this.amortizationYears * 12;
    if (monthlyRate === 0) return 0;
    return (this.loanAmount * monthlyRate * totalPayments) - this.loanAmount;
  }

  get interestPercentage(): number {
    return (this.interestAmount / this.propertyPrice) * 100;
  }

  get monthlyPayment(): number {
    const monthlyRate = this.interestRate / 100 / 12;
    const totalPayments = this.amortizationYears * 12;
    if (monthlyRate === 0) {
      return this.loanAmount / totalPayments;
    }
    return (this.loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));
  }
}
