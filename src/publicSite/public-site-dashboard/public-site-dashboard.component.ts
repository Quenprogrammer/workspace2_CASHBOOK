import { Component } from '@angular/core';
import {VisitorsComponent} from './visitors/visitors.component';
import {BarchartComponent} from './barchart/barchart.component';

@Component({
  selector: 'app-public-site-dashboard',
  standalone: true,
  imports: [
    VisitorsComponent,
    BarchartComponent
  ],
  templateUrl: './public-site-dashboard.component.html',
  styleUrl: './public-site-dashboard.component.css'
})
export class PublicSiteDashboardComponent {
  websitePages = [
    { name: 'Home Page', icon: 'bi-house-door', link: '/home' },
    { name: 'About Us Page', icon: 'bi-info-circle', link: '/about-us' },
    { name: 'Products/Services Page', icon: 'bi-box', link: '/products-services' },
    { name: 'Contact Us Page', icon: 'bi-envelope', link: '/contact' },
    { name: 'Blog/News Page', icon: 'bi-journal-text', link: '/blog' },
    { name: 'Privacy Policy Page', icon: 'bi-shield-lock', link: '/privacy-policy' },
    { name: 'Terms and Conditions Page', icon: 'bi-file-earmark-text', link: '/terms' },
    { name: 'E-commerce/Shop Page', icon: 'bi-cart', link: '/shop' },
    { name: 'Careers Page', icon: 'bi-briefcase', link: '/careers' },
    { name: 'Events Page', icon: 'bi-calendar-event', link: '/events' }
  ];

}
