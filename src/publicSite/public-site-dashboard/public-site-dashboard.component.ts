import { Component } from '@angular/core';
import {NgbNav, NgbNavItemRole, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {statistics} from "../../app/features/data/companyInformation";
import {NgForOf, NgIf} from "@angular/common";
import {MenuComponent} from "../../app/features/menu/menu.component";
import {StatsComponent} from "../../app/features/apps/app-home/stats/stats.component";
import {StandByComponent} from '../../app/core/stand-by/stand-by.component';
interface statistics{
  name:string;
  logo:string;
  count:number;
  title:string;
}
@Component({
  selector: 'app-public-site-dashboard',
  standalone: true,
  imports: [
    NgbNavOutlet,
    NgbNavItemRole,
    NgbNav,
    NgIf,
    MenuComponent,
    StatsComponent,
    NgForOf,
    StandByComponent
  ],
  templateUrl: './public-site-dashboard.component.html',
  styleUrl: './public-site-dashboard.component.css'
})
export class PublicSiteDashboardComponent {
  websitePages = [
    { name: 'HomePage', icon: 'bi-house-door', link: '/home' },
    { name: 'AboutUs', icon: 'bi-info-circle', link: '/about-us' },
    { name: 'Services', icon: 'bi-box', link: '/products-services' },
    { name: 'Contact Us', icon: 'bi-envelope', link: '/contact' },
    { name: 'News Page', icon: 'bi-journal-text', link: '/blog' },

    { name: 'Careers ', icon: 'bi-briefcase', link: '/careers' },

  ];
  statistics:statistics[] =[
    { name: 'Total Listings', count: 0, title: 'See total Leads', logo: 'icons/customeimage/Rocket.svg' },
    { name: 'Total Agents', count: 0, title: 'See Total registered agents', logo: 'icons/customeimage/Norah.svg' },
    { name: 'Total Leads', count: 0, title: 'See Total Leads that were received', logo: 'icons/customeimage/Mousehand.svg' },
    { name: 'Article Posts', count: 0, title: 'News articles that were posted', logo: 'icons/customeimage/Phone.svg' }

  ];


  isModalOpen: boolean = false;
  previewModalOpen: boolean = false;
  activeComponent: string = '';
  previewActiveComponent: string = '';


  openModal(componentKey: string) {
    this.activeComponent = componentKey;
    this.isModalOpen = true;
  }

  openPreviewModal(componentKey: string) {
    this.previewActiveComponent = componentKey;
    this.previewModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.activeComponent = '';
  }

  closePreviewModal() {
    this.previewModalOpen = false;
    this.previewActiveComponent = '';
  }
}
