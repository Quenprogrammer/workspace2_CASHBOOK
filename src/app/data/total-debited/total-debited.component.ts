import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionsService } from '../../services/transactions/transactions.service';

import { AsyncPipe, CurrencyPipe,  NgForOf, NgIf } from '@angular/common';

interface FirebaseDocument {
  totalAmount?: number;
}

@Component({
  selector: 'app-total-debited',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,

    NgForOf,
    NgIf
  ],
  templateUrl: './total-debited.component.html',
  styleUrls: ['./total-debited.component.css'] // ✅ Fixed incorrect property name
})
export class TotalDebitedComponent implements OnInit {
  documents$: Observable<FirebaseDocument[]>;

  constructor(private transactionService: TransactionsService) {
    this.documents$ = this.transactionService.totalDebits$; // ✅ Subscribe to BehaviorSubject
  }

  ngOnInit(): void {}
}
