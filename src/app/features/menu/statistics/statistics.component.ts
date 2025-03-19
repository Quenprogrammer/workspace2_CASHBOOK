import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionsService } from '../../../services/transactions/transactions.service';
import {AsyncPipe, CurrencyPipe, NgClass, NgForOf, NgIf, PercentPipe} from '@angular/common';
import { combineLatest } from 'rxjs';
import {DashChartComponent} from './dash-chart/dash-chart.component';
import {ExpenseTotalncomeRatioComponent} from './expense-totalncome-ratio/expense-totalncome-ratio.component';
import {OthersComponent} from './others/others.component';
import {OverviewComponent} from './overview/overview.component';

interface FirebaseDocument {
  totalAmount?: number;
}
@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    NgForOf,
    NgIf,
    PercentPipe,
    NgClass,
    DashChartComponent,
    ExpenseTotalncomeRatioComponent,
    OthersComponent,
    OverviewComponent
  ],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  income$: Observable<FirebaseDocument[]>;  // Observable for income data
  expenses$: Observable<FirebaseDocument[]>; // Observable for expenses data
  totalAmount: number = 0;                  // Variable to store the combined total
  credit: number = 0;                       // Variable to store the combined income total
  debit: number = 0;                        // Variable to store the combined expenses total
  netBalance: number = 0;                   // Variable to store net balance (Income - Expenses)
  profitMargin: number = 0;                 // Variable to store profit margin
  expenseToIncomeRatio: number = 0;         // Variable to store expense-to-income ratio
  savings: number = 0;                      // Variable to store savings (surplus or deficit)

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

      // Calculate net balance (income - expenses)
      this.netBalance = totalIncome - totalExpenses;

      // Calculate profit margin (profit margin = (income - expenses) / income)
      this.profitMargin = totalIncome > 0 ? (this.netBalance / totalIncome) : 0;

      // Calculate expense-to-income ratio (expenses / income)
      this.expenseToIncomeRatio = totalIncome > 0 ? (totalExpenses / totalIncome) : 0;

      // Calculate savings (net balance)
      this.savings = this.netBalance;
    });
  }
}
