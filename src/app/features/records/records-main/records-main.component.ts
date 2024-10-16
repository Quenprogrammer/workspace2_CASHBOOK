import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {MonthlyrecordsComponent} from "./monthlyrecords/monthlyrecords.component";
import {AccountsRecordsComponent} from "./accounts-records/accounts-records.component";
import {DebitsRecordsComponent} from "./debits-records/debits-records.component";
import {CreditRecordsComponent} from "./credit-records/credit-records.component";
import {SearchComponent} from "./search/search.component";
import {AnalysisComponent} from "./analysis/analysis.component";

@Component({
  selector: 'app-records-main',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    NgbNav,
    NgbNavContent,
    NgbNavItem,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavOutlet,
    MonthlyrecordsComponent,
    AccountsRecordsComponent,
    DebitsRecordsComponent,
    CreditRecordsComponent,
    SearchComponent,
    AnalysisComponent
  ],
  templateUrl: './records-main.component.html',
  styleUrl: './records-main.component.scss'
})
export class RecordsMainComponent {

}
