import { Component } from '@angular/core';
import {CaseStudyComponent} from '../../company/company-profile/case-study/case-study.component';
import {address, companyName, founded, LGA} from '../../data/companyInformation';

@Component({
  selector: 'app-view-accounts',
  standalone: true,
  imports: [
    CaseStudyComponent
  ],
  templateUrl: './view-accounts.component.html',
  styleUrl: './view-accounts.component.css'
})
export class ViewAccountsComponent {

  protected readonly companyName = companyName;
  protected readonly address = address;
  protected readonly LGA = LGA;
  protected readonly founded = founded;
}
