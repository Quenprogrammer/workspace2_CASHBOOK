import { Component } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import {CreditComponent} from "./credit/credit.component";
import {address, companyName, email, phone} from '../data/companyInformation';

import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavOutlet} from '@ng-bootstrap/ng-bootstrap';
import {HeadingComponent} from '../../core/components/heading/heading.component';





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


  ],
  templateUrl: './cashbook.component.html',
  styleUrls: ['./cashbook.component.scss']
})
export class CashbookComponent {

  protected readonly companyName = companyName;

  protected readonly email = email;
  protected readonly address = address;
  protected readonly phone = phone;
}
