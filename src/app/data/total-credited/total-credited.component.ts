import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {AsyncPipe, CurrencyPipe, KeyValuePipe, NgForOf, NgIf, TitleCasePipe} from '@angular/common';
import { TransactionsService } from '../../services/transactions/transactions.service';
interface FirebaseDocument {
  totalAmount?: number;
}

@Component({
  selector: 'app-total-credited',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    AsyncPipe,
    NgIf

  ],
  templateUrl: './total-credited.component.html',
  styleUrl: './total-credited.component.css'
})
export class TotalCreditedComponent implements OnInit{
  documents$: Observable<FirebaseDocument[]>;

  constructor(private transactionService: TransactionsService) {
    this.documents$ = this.transactionService.totalCredits$; // ✅ Subscribe to total credits
  }

  ngOnInit(): void {}
}
