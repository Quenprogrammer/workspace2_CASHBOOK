import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import{created,} from"./apps-created"
import{designed,} from"./designedApps"
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {socialAccount} from '../../../data/companyInformation';
@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [
    RouterLink,
    NgbNav,
    NgbNavContent,
    NgbNavItem,
    NgbNavLink,
    NgbNavOutlet
  ],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css'
})
export class CaseStudyComponent {

  protected readonly created = created;
  protected readonly designed = designed;
  protected readonly socialAccount = socialAccount;
}
