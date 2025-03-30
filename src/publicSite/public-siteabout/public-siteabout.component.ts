import { Component } from '@angular/core';
import {locationsWeWork, qualities} from '../../app/features/data/companyInformation';
import {FactsAndFiguresComponent} from './facts-and-figures/facts-and-figures.component';

@Component({
  selector: 'app-public-siteabout',
  standalone: true,
  imports: [
    FactsAndFiguresComponent
  ],
  templateUrl: './public-siteabout.component.html',
  styleUrl: './public-siteabout.component.css'
})
export class PublicSiteaboutComponent {

  protected readonly locationsWeWork = locationsWeWork;
  protected readonly qualities = qualities;
}
