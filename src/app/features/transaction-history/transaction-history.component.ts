import {Component, inject, OnInit, ChangeDetectorRef, WritableSignal, signal} from '@angular/core';

import { FormsModule } from "@angular/forms";

import {LoadingComponent} from '../../core/system/loading/loading.component';
import {Observable} from 'rxjs';
import {Account, FirestoreService} from '../../services/firestore/firestore.service';
import {CreditComponent} from '../cashbook/credit/credit.component';
import {CreditedComponent} from './credited/credited.component';


@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [FormsModule, LoadingComponent, CreditComponent, CreditedComponent],
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent  implements OnInit{
  accounts$: Observable<Account[]> | undefined;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.accounts$ = this.firestoreService.getAccounts();
  }
}
