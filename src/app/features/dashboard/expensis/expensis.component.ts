import {Component} from '@angular/core';
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {Observable} from 'rxjs';
import {TransactionsService} from '../../../services/transactions/transactions.service';
interface FirebaseDocument {
  totalAmount?: number;
}

@Component({
  selector: 'app-expensis',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './expensis.component.html',
  styleUrl: './expensis.component.css'
})
export class ExpensisComponent {
  documents$: Observable<FirebaseDocument[]>;

  constructor(private transactionService: TransactionsService) {
    this.documents$ = this.transactionService.totalDebits$; // ✅ Subscribe to BehaviorSubject
  }

  ngOnInit(): void {}
}
