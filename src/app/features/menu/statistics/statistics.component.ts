import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionsService } from '../../../services/transactions/transactions.service';
import { AsyncPipe, CurrencyPipe, NgClass, NgForOf, NgIf, PercentPipe } from '@angular/common';
import { combineLatest } from 'rxjs';
import { DashChartComponent } from './dash-chart/dash-chart.component';
import { ExpenseTotalncomeRatioComponent } from './expense-totalncome-ratio/expense-totalncome-ratio.component';
import { OthersComponent } from './others/others.component';
import { OverviewComponent } from './overview/overview.component';
import {TransferService} from '../../../services/transfer.service';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './header/header.component';
/*import {BarchartComponent} from '../../../../publicSite/public-site-dashboard/barchart/barchart.component';*/
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {LatestTransactionComponent} from './latest-transaction/latest-transaction.component';

interface FirebaseDocument {
  totalAmount?: number;
}

// Extend the Statistic interface to include 'progress' property
interface Statistic {
  title: string;
  value: number;
  displayValue: string;
  type: 'currency' | 'percent' | 'text'; // For the type of formatting
  isProfit?: boolean;                    // For profit/loss determination
  isRatio?: boolean;                     // For ratio-based calculations (e.g., percentage)
  progress?: number;                     // New progress property for the progress bar
}

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    NgForOf,
    NgIf,
    NgClass,
    DashChartComponent,
    ExpenseTotalncomeRatioComponent,
    OthersComponent,
    OverviewComponent,
    NgbNav,
    NgbNavContent,
    NgbNavItem,
    NgbNavLink,
    HeaderComponent,

    BarChartComponent,
    LatestTransactionComponent
  ],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  data =[
    { name: 'Total Listings', count: 0, title: 'See total Leads', logo: 'icons/customeimage/Rocket.svg' },
    { name: 'Total Agents', count: 0, title: 'See Total registered agents', logo: 'icons/customeimage/Norah.svg' },
    { name: 'Total Leads', count: 0, title: 'See Total Leads that were received', logo: 'icons/customeimage/Mousehand.svg' },

  ]
  income$: Observable<FirebaseDocument[]>;  // Observable for income data
  expenses$: Observable<FirebaseDocument[]>; // Observable for expenses data

  statistics: Statistic[] = [];  // Array of Statistic objects, now supporting 'progress'

  constructor(private transactionService: TransactionsService, private transferService: TransferService) {
    this.income$ = this.transactionService.totalCredits$;  // Getting income data
    this.expenses$ = this.transactionService.totalDebits$;  // Getting expenses data
  }

  ngOnInit(): void {
    // Combine both observables and subscribe
 this.addTransferByLogin()
    combineLatest([this.income$, this.expenses$]).subscribe(([incomeDocs, expenseDocs]) => {
      // Accumulate total income and total expenses
      const totalIncome = incomeDocs.reduce((sum, doc) => sum + (doc.totalAmount || 0), 0);
      const totalExpenses = expenseDocs.reduce((sum, doc) => sum + (doc.totalAmount || 0), 0);

      const netBalance = totalIncome - totalExpenses;
      const totalIncomeExpenses = totalIncome + totalExpenses;

      // Calculate ratios and margins
      const profitMargin = totalIncome > 0 ? (netBalance / totalIncome) : 0;
      const expenseToIncomeRatio = totalIncome > 0 ? (totalExpenses / totalIncome) : 0;
      const savings = netBalance;

      // Calculate the percentage for progress bars
      const averageIncomeProgress = totalIncome / totalIncomeExpenses * 100;
      const averageExpensesProgress = totalExpenses / totalIncomeExpenses * 100;

      // Populate statistics array with progress bar values
      this.statistics = [
        {
          title: 'Income',
          value: totalIncome / 12,
          displayValue: this.formatCurrency(totalIncome ),
          type: 'currency',
          progress: averageIncomeProgress // Add progress here for average income
        },
        {
          title: 'Expenses',
          value: totalExpenses / 12,
          displayValue: this.formatCurrency(totalExpenses ),
          type: 'currency',
          progress: averageExpensesProgress // Add progress here for average expenses
        },
        {
          title: 'Profit Margin',
          value: profitMargin,
          displayValue: this.formatPercent(profitMargin),
          type: 'percent'
        },
        {
          title: 'Savings (Surplus/Deficit)',
          value: savings,
          displayValue: this.formatCurrency(savings),
          type: 'currency',
          isProfit: savings > 0
        },
        {
          title: 'Average Income',
          value: totalIncome / 12,
          displayValue: this.formatCurrency(totalIncome / 12),
          type: 'currency',
          progress: averageIncomeProgress // Add progress here for average income
        },
        {
          title: 'Average Expenses',
          value: totalExpenses / 12,
          displayValue: this.formatCurrency(totalExpenses / 12),
          type: 'currency',
          progress: averageExpensesProgress // Add progress here for average expenses
        },
        {
          title: 'Expense-to-Income Ratio',
          value: expenseToIncomeRatio,
          displayValue: this.formatPercent(expenseToIncomeRatio),
          type: 'percent'
        },
        {
          title: 'Debt-to-Income Ratio',
          value: totalIncome > 0 ? (totalExpenses / totalIncome) * 100 : 0,
          displayValue: this.formatPercent(totalIncome > 0 ? (totalExpenses / totalIncome) : 0),
          type: 'percent'
        }
      ];
    });
  }


  getIconForStat(stat: any): string {
    const icons: { [key: string]: string } = {
      'Profit Margin': 'bi-graph-up',
      'Savings (Surplus/Deficit)': 'bi-currency-dollar',
      'Average Income': 'bi-wallet',
      'Average Expenses': 'bi-credit-card',
      'Expense-to-Income Ratio': 'bi-bar-chart',
      'Debt-to-Income Ratio': 'bi-cash-stack'
    };
    return icons[stat.title] || 'bi-question-circle';  // Fallback icon if no match
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }

  formatPercent(value: number): string {
    return `${(value * 100).toFixed(2)}%`;
  }




  addTransferByLogin() {
    const transferData = {
      amount: 5000,
      type: 'income',
      timestamp: new Date()
    };

    this.transferService.addByLogin(transferData)
      .then(() => console.log('Transfer added by login successfully'))
      .catch(error => console.error('Error adding transfer by login:', error));
  }

  // Method to handle adding a transfer by token
  addTransferByToken() {
    const transferData = {
      amount: 7000,
      type: 'expense',
      timestamp: new Date()
    };

    this.transferService.addByToken(transferData)
      .then(() => console.log('Transfer added by token successfully'))
      .catch(error => console.error('Error adding transfer by token:', error));
  }




}
