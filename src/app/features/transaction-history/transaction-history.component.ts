import {Component, inject, OnInit, ChangeDetectorRef, WritableSignal, signal} from '@angular/core';

import { FormsModule } from "@angular/forms";

import {LoadingComponent} from '../../core/system/loading/loading.component';
import {Observable} from 'rxjs';
import {Account, FirestoreService} from '../../services/firestore/firestore.service';

import {DebitComponent} from './debit/debit.component';
import {NgIf} from '@angular/common';
import {CreditedComponent} from './credited/credited.component';
import {MenuComponent} from '../menu/menu.component';


@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [FormsModule, LoadingComponent, DebitComponent, NgIf, CreditedComponent, MenuComponent],
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent  {
  selectedOption: string = 'debit';
}
