import {Component, OnDestroy, OnInit} from '@angular/core';
import { TransactionsService } from '../../../services/transactions/transactions.service';
import {Subscription} from 'rxjs';
import {DecimalPipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [
    DecimalPipe,
    NgClass
  ],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent implements OnInit, OnDestroy{
  balance: number = 0;

  private subscriptions: Subscription = new Subscription();

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.transactionsService.balance$.subscribe((balance) => {
        this.balance = balance;
      })
    );


  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
