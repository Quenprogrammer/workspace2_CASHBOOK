import { Component, inject, OnInit } from '@angular/core';

import { AsyncPipe, CurrencyPipe } from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {TransactionsService} from '../../services/transactions/transactions.service';
import {FirebaseDocument} from '../../services/Cumulative/totals.service';
import {IncomeComponent} from './income/income.component';
import {ExpensisComponent} from './expensis/expensis.component';
import {BalanceComponent} from './balance/balance.component';
import {StatsComponent} from './stats/stats.component';
import {ServerComponent} from './server/server.component';

interface MessageInquiries {
  id?: string;
  date: string;
  referenceNumber: string;
  description: string;
  account: string;
  amount: number;
  payee: string;
  paymentMode: string;
  type: string; // This will be 'credit' or 'debit'
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    IncomeComponent,
    ExpensisComponent,
    BalanceComponent,
    StatsComponent,
    ServerComponent

  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] // Fixed typo: styleUrl should be styleUrls
})
export class DashboardComponent /*implements OnInit*/ {
  progress1 = 33;  // Value for the first progress bar
  progress2 = 25;  // Value for the second progress bar

  // Opacity for the second progress bar
  opacity2 = 0.6;  // Opacity of the second progress bar
}
