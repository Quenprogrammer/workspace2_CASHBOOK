import {Component} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-hint',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './hint.component.html',
  styleUrl: './hint.component.css'
})
export class HintComponent {
  // Default values for form inputs
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  explanations = [
    {
      title: 'Property Price',
      description: 'This is the total cost of the property. It represents the full market value or listing price at which the seller is willing to sell. The actual purchase price may vary depending on negotiations, market conditions, and any applicable fees such as legal and administrative costs.',
      importance: 'Determines loan requirements and deposit percentage.',
      impact: 'Affects mortgage affordability and overall financial planning.',
      recommendation: 'Compare market prices and negotiate effectively to get the best deal.',
      keyPoints: ['Market price', 'Negotiable', 'Upfront cost', 'Legal fees']
    },
    {
      title: 'Deposit (25%)',
      description: 'The deposit is the initial amount paid upfront by the buyer, typically expressed as a percentage of the property price. A higher deposit reduces the amount borrowed, leading to lower monthly payments and potentially better mortgage terms. Most lenders require a minimum deposit to approve a loan.',
      importance: 'Directly influences loan amount and interest rates.',
      impact: 'Higher deposits result in lower interest payments over time.',
      recommendation: 'Save for a larger deposit to minimize borrowing costs and secure better loan terms.',
      keyPoints: ['Upfront pay', 'Lower loan', 'Better terms', 'Required']
    },
    {
      title: 'Loan Amount',
      description: 'The loan amount is the principal borrowed from the bank or financial institution after deducting the deposit from the property price. This amount will be repaid over the agreed amortization period along with interest. Lenders evaluate a buyer’s creditworthiness before approving this amount.',
      importance: 'Determines monthly repayment and total interest cost.',
      impact: 'Higher loan amounts lead to increased interest payments.',
      recommendation: 'Only borrow what is necessary and ensure affordability over the loan term.',
      keyPoints: ['Borrowed sum', 'Bank funded', 'Needs approval', 'Monthly repay']
    },
    {
      title: 'Interest Rate',
      description: 'The interest rate is the percentage charged annually by the lender on the remaining loan balance. It can be fixed (remains constant throughout the loan term) or variable (fluctuates based on market conditions). The interest rate significantly impacts the total cost of borrowing over time.',
      importance: 'Affects overall borrowing cost and monthly payment.',
      impact: 'Higher rates increase total repayment, while lower rates save money.',
      recommendation: 'Shop around for competitive rates and consider fixed rates for stability.',
      keyPoints: ['Fixed rate', 'Variable', 'Annual cost', 'Market linked']
    },
    {
      title: 'Amortization Period',
      description: 'The amortization period is the total time over which the loan is scheduled to be repaid in full. Longer periods result in lower monthly payments but higher overall interest paid. Shorter periods increase monthly payments but reduce total interest costs, leading to faster debt repayment.',
      importance: 'Determines the total duration of the loan.',
      impact: 'Longer periods lower monthly payments but increase total interest.',
      recommendation: 'Choose a period that balances affordability and total interest savings.',
      keyPoints: ['Loan term', '25+ years', 'Lower pay', 'More interest']
    },
    {
      title: 'Principal and Interest',
      description: 'The principal is the portion of the loan repayment that reduces the outstanding balance, while interest is the cost of borrowing. Monthly payments are calculated based on the loan amount, interest rate, and amortization period.',
      importance: 'Represents the core of mortgage repayment.',
      impact: 'Determines how much of each payment goes toward reducing debt.',
      recommendation: 'Understand amortization schedules and consider extra payments to reduce principal faster.',
      keyPoints: ['Monthly pay', 'Debt balance', 'Loan cost', 'Extra pay']
    },
    {
      title: 'Total Interest Paid Over Loan Term',
      description: 'This is the cumulative amount of interest paid over the full loan period. The total interest depends on the interest rate and the amortization schedule. Making extra payments or opting for a shorter loan term can reduce total interest costs significantly.',
      importance: 'Shows the long-term cost of borrowing.',
      impact: 'Higher interest payments reduce financial flexibility over time.',
      recommendation: 'Make additional principal payments when possible to reduce total interest costs.',
      keyPoints: ['Long-term cost', 'Extra charges', 'Higher rates', 'Avoid excess']
    },
    {
      title: 'Monthly Mortgage Insurance (if applicable)',
      description: 'Some lenders require mortgage insurance if the deposit is below a certain threshold (typically 20%). This protects the lender in case of default and adds to the monthly costs. It may be removed once a certain equity percentage is reached.',
      importance: 'An additional cost for buyers with low deposits.',
      impact: 'Increases monthly payments and total homeownership costs.',
      recommendation: 'Aim for a higher deposit to avoid mortgage insurance fees.',
      keyPoints: ['Extra cost', 'Low deposit', 'Lender rule', 'Removable']
    },
    {
      title: 'Additional Fees and Closing Costs',
      description: 'Purchasing a property often involves extra costs such as legal fees, property appraisal, taxes, and lender charges. These costs can range from 2% to 5% of the property price and should be factored into the total budget.',
      importance: 'Affects overall affordability of the home purchase.',
      impact: 'Can significantly add to upfront costs.',
      recommendation: 'Budget for these expenses in advance to avoid financial surprises.',
      keyPoints: ['Legal fees', 'Bank costs', 'Appraisal', 'Taxes']
    },
    {
      title: 'Early Repayment Options',
      description: 'Some lenders allow early repayment without penalties, while others charge fees for prepaying the mortgage. Early repayment reduces total interest paid and shortens the loan duration.',
      importance: 'Affects flexibility in loan repayment.',
      impact: 'Paying early can save on interest but may incur fees.',
      recommendation: 'Check for prepayment penalties and plan accordingly to reduce debt faster.',
      keyPoints: ['Penalty free', 'Extra pay', 'Faster clear', 'Save money']
    }
  ];


}
