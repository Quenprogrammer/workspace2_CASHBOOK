import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";
import {AccountsRecordsComponent} from "../records/records-main/accounts-records/accounts-records.component";
import {AnalysisComponent} from "../records/records-main/analysis/analysis.component";
import {CreditRecordsComponent} from "../records/records-main/credit-records/credit-records.component";
import {DebitsRecordsComponent} from "../records/records-main/debits-records/debits-records.component";
import {MonthlyrecordsComponent} from "../records/records-main/monthlyrecords/monthlyrecords.component";
import {SearchComponent} from "../records/records-main/search/search.component";

@Component({
  selector: 'app-database',
  standalone: true,
  imports: [

    RouterLink,

  ],
  templateUrl: './database.component.html',
  styleUrl: './database.component.scss'
})
export class DatabaseComponent {

}
