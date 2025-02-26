import { Component, inject, OnInit } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import {DebitComponent} from "./debit/debit.component";
import {CreditComponent} from "./credit/credit.component";
import {FirestoreService} from '../../services/firestore/firestore.service';
import {NgForOf} from '@angular/common';
import {StatsComponent} from '../../shared/stats/stats.component';



@Component({
  selector: 'app-cashbook',
  standalone: true,
  imports: [
    ReactiveFormsModule,

    FormsModule,
    DebitComponent,
    CreditComponent,
    NgForOf,
    StatsComponent,

  ],
  templateUrl: './cashbook.component.html',
  styleUrls: ['./cashbook.component.scss']
})
export class CashbookComponent {

}
