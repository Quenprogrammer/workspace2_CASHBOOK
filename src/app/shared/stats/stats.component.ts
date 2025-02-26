import {Component, OnInit} from '@angular/core';

import {Account, FirestoreService} from '../../services/firestore/firestore.service';
import {AsyncPipe, CurrencyPipe, NgForOf} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf


  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent implements OnInit {
  accounts$: Observable<Account[]> | undefined;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.accounts$ = this.firestoreService.getAccounts();
  }
}
