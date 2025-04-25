import {Component, inject, OnInit, ChangeDetectorRef, WritableSignal, signal} from '@angular/core';

import { FormsModule } from "@angular/forms";

import {LoadingComponent} from '../../core/system/loading/loading.component';
import {Observable} from 'rxjs';
import {Account, FirestoreService} from '../../services/firestore/firestore.service';

import {DebitComponent} from './debit/debit.component';
import {NgIf} from '@angular/common';
import {CreditedComponent} from './credited/credited.component';
import {MenuComponent} from '../menu/menu.component';
import {TotalCreditedComponent} from '../../data/total-credited/total-credited.component';
import {DataServiceService} from '../../services/dataService';



@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [FormsModule, LoadingComponent, DebitComponent, NgIf, CreditedComponent, MenuComponent, TotalCreditedComponent],
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent  {
  selectedOption: string = 'debit';
  isLoading = signal<boolean>(false);
  constructor(private firestoreService: DataServiceService) {}

  ngOnInit(): void {
    this.addLogTrack();
  }

  addLogTrack(): void {
    const now = new Date();
    const logTrack = {
      date: now.toLocaleDateString(),  // e.g., "17/04/2025"
      time: now.toLocaleTimeString(),  // e.g., "10:34:56 AM"
      action: 'Company Profile',
      user: 'admin',

    };

    this.firestoreService.addData('logs', logTrack)
      .then(() => console.log('LogTrack saved to Firestore'))
      .catch(error => console.error('Error saving LogTrack:', error));
  }
}
