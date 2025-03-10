import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {TransactionsService} from '../../../services/transactions/transactions.service';
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from '@angular/common';
interface FirebaseDocument {
  totalAmount?: number;
}
@Component({
  selector: 'app-income',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  documents$: Observable<FirebaseDocument[]>;

  constructor(private transactionService: TransactionsService) {
    this.documents$ = this.transactionService.totalCredits$; // ✅ Subscribe to total credits
  }

  ngOnInit(): void {}
}
