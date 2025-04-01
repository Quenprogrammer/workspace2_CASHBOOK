import { Component } from '@angular/core';
import {
  aboutSahizGroup, careers,
  CEOName, companyName, coreValues,
  country, email,
  founded, headquarters,
  industry,
  LGA,
  locationsWeWork,
  logo, mission, phone,
  qualities, services, stateLocated, theme, vision
} from '../../app/features/data/companyInformation';
import {FactsAndFiguresComponent} from './facts-and-figures/facts-and-figures.component';
import {TextComponent} from '../../app/core/components/text/text.component';
import {NgForOf, NgIf} from '@angular/common';
import {TruncateTextPipe} from '../../app/shared/truncate-text-pipe/truncate-text.pipe';
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionHeader,
  NgbAccordionItem, NgbCollapse
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-public-siteabout',
  standalone: true,
  imports: [
    FactsAndFiguresComponent,
    TextComponent,
    NgForOf,
    NgIf,
    TruncateTextPipe,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionButton,
    NgbAccordionCollapse,
    NgbAccordionBody,
    NgbCollapse
  ],
  templateUrl: './public-siteabout.component.html',
  styleUrl: './public-siteabout.component.css'
})
export class PublicSiteaboutComponent {
  isCollapsed: boolean[] = [true, true, true, true, true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]; // Initial state of collapsible sections
  toggleCollapse(section: number) {
    this.isCollapsed[section] = !this.isCollapsed[section];
  }
  isModalOpen: boolean = false;
  protected readonly locationsWeWork = locationsWeWork;
  protected readonly qualities = qualities;
  protected readonly logo = logo;
  protected readonly founded = founded;
  protected readonly industry = industry;
  protected readonly LGA = LGA;
  protected readonly country = country;
  protected readonly stateLocated = stateLocated;
  protected readonly CEOName = CEOName;
  protected readonly headquarters = headquarters;
  protected readonly phone = phone;
  protected readonly email = email;

  protected readonly mission = mission;
  protected readonly vision = vision;
  protected readonly aboutSahizGroup = aboutSahizGroup;
  protected readonly companyName = companyName;
  protected readonly theme = theme;
  protected readonly coreValues = coreValues;
  protected readonly services = services;



  servicesProvided: { title: string; image: string; description:string; } =
    { title: '', image: '', description: '' };
  openModal(index: number) {
    this.servicesProvided = this.services[index];
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  protected readonly careers = careers;
}
