import { Component } from '@angular/core';
import {DecimalPipe, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HintComponent} from './hint/hint.component';

@Component({
  selector: 'app-tax-calculator',
  standalone: true,
  imports: [
    DecimalPipe,
    FormsModule,
    NgIf,
    HintComponent
  ],
  templateUrl: './tax-calculator.component.html',
  styleUrl: './tax-calculator.component.css'
})
export class TaxCalculatorComponent {

  propertyPrice: number = 8999000; // Example default property price
  depositPercentage: number = 25;  // Default deposit percentage
  interestRate: number = 3.5;      // Default interest rate
  amortizationYears: number = 25;  // Default amortization period (years)

  // Computed Properties
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

  updateCalculations() {
    // This method is triggered on input changes to refresh computed values
  }
}
