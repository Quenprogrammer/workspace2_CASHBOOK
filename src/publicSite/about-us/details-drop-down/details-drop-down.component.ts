import { Component } from '@angular/core';
import {NgbCollapse, NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavOutlet} from '@ng-bootstrap/ng-bootstrap';
import {FactsAndFiguresComponent} from '../../home/facts-and-figures/facts-and-figures.component';
import {InstituationPoliciesComponent} from '../instituation-policies/instituation-policies.component';
import {
  StudentDeciplineAndConductComponent
} from './student-decipline-and-conduct/student-decipline-and-conduct.component';
import {CoreValuesComponent} from './core-values/core-values.component';
import {ObjectivesComponent} from './objectives/objectives.component';

@Component({
  selector: 'app-details-drop-down',
  standalone: true,
  imports: [
    NgbCollapse,
    FactsAndFiguresComponent,
    NgbNav,
    NgbNavContent,
    NgbNavItem,
    NgbNavLink,
    NgbNavOutlet,
    InstituationPoliciesComponent,
    StudentDeciplineAndConductComponent,
    CoreValuesComponent,
    ObjectivesComponent
  ],
  templateUrl: './details-drop-down.component.html',
  styleUrl: './details-drop-down.component.css'
})
export class DetailsDropDownComponent {
  isCollapsed: boolean[] = [true, true, true, true, true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]; // Initial state of collapsible sections
  toggleCollapse(section: number) {
    this.isCollapsed[section] = !this.isCollapsed[section];
  }
}
