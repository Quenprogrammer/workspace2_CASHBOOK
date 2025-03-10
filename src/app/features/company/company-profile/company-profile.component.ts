import { Component } from '@angular/core';
import {companyName} from '../../data/companyInformation';
import {CaseStudyComponent} from './case-study/case-study.component';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [
    CaseStudyComponent
  ],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent {

  protected readonly companyName = companyName;
}
