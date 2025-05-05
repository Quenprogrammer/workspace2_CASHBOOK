import { Component } from '@angular/core';
import {address, companyName, founded, LGA, theme} from '../../data/companyInformation';
import {CaseStudyComponent} from './case-study/case-study.component';
import {DataServiceService} from '../../../services/dataService';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [
    CaseStudyComponent,

  ],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent {
  constructor(private firestoreService: DataServiceService) {}

  ngOnInit(): void {
    this.addLogTrack();
  }

  addLogTrack(): void {
    const now = new Date();
    const logTrack = {
      date: now.toLocaleDateString(),  // e.g., "17/04/2025"
      time: now.toLocaleTimeString(),  // e.g., "10:34:56 AM"
      action: 'Company Profile',
      user: 'admin',

    };

    this.firestoreService.addData('logs', logTrack)
      .then(() => console.log('LogTrack saved to Firestore'))
      .catch(error => console.error('Error saving LogTrack:', error));
  }
  protected readonly companyName = companyName;
  protected readonly address = address;
  protected readonly LGA = LGA;
  protected readonly founded = founded;
  protected readonly theme = theme;
}
