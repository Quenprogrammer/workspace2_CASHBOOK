import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionsService } from '../../services/transactions/transactions.service';
import {AsyncPipe, CurrencyPipe, DecimalPipe, NgClass, NgForOf, NgIf, PercentPipe} from '@angular/common';
import { combineLatest } from 'rxjs';

interface FirebaseDocument {
  totalAmount?: number;
}

@Component({
  selector: 'app-total-credited',
  standalone: true,
  templateUrl: './total-credited.component.html',
  imports: [NgIf, CurrencyPipe, AsyncPipe, NgForOf, NgClass, PercentPipe, DecimalPipe],  // Ensure these imports are correct
  styleUrls: ['./total-credited.component.css']
})
export class TotalCreditedComponent implements OnInit {
  isLoading: boolean = true;  // To handle loading state
  income$: Observable<FirebaseDocument[]>;  // Observable for income data
  expenses$: Observable<FirebaseDocument[]>; // Observable for expenses data
  totalAmount: number = 0;                  // Variable to store the combined total
  credit: number = 0;                       // Variable to store the combined income total
  debit: number = 0;                        // Variable to store the combined expenses total
  netBalance: number = 0;                   // Variable to store net balance (Income - Expenses)
         // Variable to store expense-to-income ratio
  savings: number = 0;                      // Variable to store savings (surplus or deficit)
creditPercentage:number=0;
debitPercentage:number=0;
  constructor(private transactionService: TransactionsService) {
    this.income$ = this.transactionService.totalCredits$;  // Getting income data
    this.expenses$ = this.transactionService.totalDebits$;  // Getting expenses data
  }

  ngOnInit(): void {
    // Combine both observables and subscribe
    combineLatest([this.income$, this.expenses$]).subscribe(([incomeDocs, expenseDocs]) => {
      const totalIncome = incomeDocs.reduce((sum, doc) => sum + (doc.totalAmount || 0), 0);
      const totalExpenses = expenseDocs.reduce((sum, doc) => sum + (doc.totalAmount || 0), 0);

      // Store total income and expenses
      this.credit = totalIncome;
      this.debit = totalExpenses;

      // Calculate total balance (income + expenses)
      this.totalAmount = totalIncome + totalExpenses;
      this.creditPercentage=(this.credit/this.totalAmount)*100
      this.debitPercentage=(this.debit/this.totalAmount)*100
      // Calculate net balance (income - expenses)
      this.netBalance = totalIncome - totalExpenses;

      // Calculate savings (net balance)
      this.savings = this.netBalance;

      this.isLoading = false;
    });
  }
}
