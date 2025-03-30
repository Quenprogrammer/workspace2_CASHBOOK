import { Component } from '@angular/core';
import {VisitorsComponent} from './visitors/visitors.component';
import {BarchartComponent} from './barchart/barchart.component';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavOutlet} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-public-site-dashboard',
  standalone: true,
  imports: [
    VisitorsComponent,
    BarchartComponent,
    NgbNavItem,
    NgbNav,
    NgbNavOutlet,
    NgbNavLink,
    NgbNavContent
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
    { name: 'E-commerce', icon: 'bi-cart', link: '/shop' },
    { name: 'Careers ', icon: 'bi-briefcase', link: '/careers' },
    { name: 'Events ', icon: 'bi-calendar-event', link: '/events' }
  ];

}
