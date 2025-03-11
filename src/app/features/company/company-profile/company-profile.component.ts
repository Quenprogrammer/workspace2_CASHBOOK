import { Component } from '@angular/core';
import {companyName} from '../../data/companyInformation';
import {CaseStudyComponent} from './case-study/case-study.component';
import {SideBarComponent} from '../../apps/components/side-bar/side-bar.component';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [
    CaseStudyComponent,
    SideBarComponent
  ],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent {

  protected readonly companyName = companyName;
}
