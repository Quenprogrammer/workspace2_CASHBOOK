import {Component, Input} from '@angular/core';
import {WindowsViewComponent} from '../../core/windows-view/windows-view.component';
import {
  address,
  companyName,
  companyPaymentChannels, country,
  email,
  LGA, logo,
  phone,
  stateLocated, website
} from '../data/companyInformation';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [

    NgIf,
    NgForOf,
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionButton,
    NgClass,
    FormsModule,
    NgbAccordionCollapse,
    NgbAccordionBody
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
  @Input() rentModules: { nameOfmodule: string; Options: { name: string; details: string; file: string }[] }[] = [];

  isModal2Open = false;
  protected readonly companyPaymentChannels = companyPaymentChannels;
  protected readonly email = email;
  protected readonly phone = phone;
  protected readonly companyName = companyName;
  protected readonly address = address;

  protected readonly stateLocated = stateLocated;
  protected readonly LGA = LGA;
  protected readonly country = country;
  protected readonly website = website;
  protected readonly logo = logo;
  closeModal(): void {

  }

  addModule(): void {
    this.rentModules.push({ nameOfmodule: '', Options: [] });
  }

  removeModule(moduleIndex: number): void {
    if (this.rentModules.length > moduleIndex) {
      this.rentModules.splice(moduleIndex, 1);
    }
  }

  /*** OPTION MANAGEMENT METHODS ***/
  addOption(moduleIndex: number): void {
    this.rentModules[moduleIndex].Options.push({ name: '', details: '', file: '' });
  }

  removeOption(moduleIndex: number, optionIndex: number): void {
    if (this.rentModules[moduleIndex].Options.length > optionIndex) {
      this.rentModules[moduleIndex].Options.splice(optionIndex, 1);
    }
  }
}
