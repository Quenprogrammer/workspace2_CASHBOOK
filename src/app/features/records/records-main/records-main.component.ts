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
import {TruncateTextPipe} from '../../../shared/truncate-text-pipe/truncate-text.pipe';

@Component({
  selector: 'app-records-main',
  standalone: true,
  imports: [
    RouterLink,
    TruncateTextPipe,

  ],
  templateUrl: './records-main.component.html',
  styleUrl: './records-main.component.scss'
})
export class RecordsMainComponent {
  siteMap = [

    { name: 'profile', path: '/profile', logo: '' },
    { name: 'settings', path: '/settings', logo: '' },
    { name: 'auth', path: '/auth', logo: '' },
    { name: 'invalidAccount', path: '/invalidAccount', logo: '' },
    { name: 'home', path: '/home', logo: '' },
    { name: 'invoice', path: '/invoice', logo: '' },
    { name: 'menu', path: '/menu', logo: '' },
    { name: 'users', path: '/users', logo: '' },
    { name: 'addContacts', path: '/addContacts', logo: '' },
    { name: 'apps', path: '/apps', logo: '' },
    { name: 'payments', path: '/payments', logo: '' },
    { name: 'cashbook-accounts', path: '/cashbook-accounts', logo: '' },
    { name: 'records', path: '/records', logo: '' },
    { name: 'transaction-history', path: '/transaction-history', logo: '' },
    { name: 'payment', path: '/payment', logo: '' },
    { name: 'backupData', path: '/backupData', logo: '' },
    { name: 'backupDataPassword', path: '/backupDataPassword', logo: '' },
    { name: 'createUser', path: '/createUser', logo: '' },
    { name: 'statistics', path: '/statistics', logo: '' },
    { name: 'cashbook', path: '/cashbook', logo: '' },
    { name: 'dashboard', path: '/dashboard', logo: '' },
    { name: 'ledger', path: '/ledger', logo: '' },
    { name: 'vault', path: '/vault', logo: '' },
    { name: 'vaultPassword', path: '/vaultPassword', logo: '' },
    { name: 'database', path: '/database', logo: '' }
  ];

}
