import {Component, OnInit} from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import {CreditComponent} from "./credit/credit.component";
import {address, companyName, email, phone} from '../data/companyInformation';

import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavOutlet} from '@ng-bootstrap/ng-bootstrap';
import {HeadingComponent} from '../../core/components/heading/heading.component';
import {Observable} from 'rxjs';
import {Account, FirestoreService} from '../../services/firestore/firestore.service';
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import { map } from 'rxjs/operators';
import {HeadingSmallComponent} from '../../core/components/heading-small/heading-small.component'; // Ensure this is imported




@Component({
  selector: 'app-cashbook',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CreditComponent,
    NgbNav,
    NgbNavContent,
    NgbNavItem,
    NgbNavLink,
    NgbNavOutlet,
    HeadingComponent,
    AsyncPipe,
    NgIf,
    NgForOf,
    HeadingSmallComponent,
    CurrencyPipe,


  ],
  templateUrl: './cashbook.component.html',
  styleUrls: ['./cashbook.component.scss']
})
export class CashbookComponent implements OnInit {

  protected readonly companyName = companyName;
  protected readonly email = email;
  protected readonly address = address;
  protected readonly phone = phone;



  credit$!: Observable<Account[]>;
  debit$!: Observable<Account[]>;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.credit$ = this.firestoreService.getAccounts().pipe(
      map(accounts => accounts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4))
    );

    this.debit$ = this.firestoreService.getDebit().pipe(
      map(accounts => accounts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4))
    );
  }
}
