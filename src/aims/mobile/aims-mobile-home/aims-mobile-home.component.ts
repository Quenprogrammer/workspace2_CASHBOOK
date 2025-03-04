import { Component } from '@angular/core';

@Component({
  selector: 'app-aims-mobile-home',
  standalone: true,
  imports: [],
  templateUrl: './aims-mobile-home.component.html',
  styleUrl: './aims-mobile-home.component.css'
})
export class AimsMobileHomeComponent {
  menuItems = [
    { name: 'Contact Us', image: 'assets/contact-us.png', link: '/contact-us' },
    { name: 'About Us', image: 'assets/about-us.png', link: '/about-us' },
    { name: 'News and Updates', image: 'assets/news-updates.png', link: '/news-updates' },
    { name: 'Team', image: 'assets/team.png', link: '/team' },
    { name: 'Learning Resources', image: 'assets/learning-resources.png', link: '/learning-resources' },
    { name: 'Terms', image: 'assets/terms.png', link: '/terms' },
    { name: 'Privacy and Policy', image: 'assets/privacy-policy.png', link: '/privacy-policy' },
    { name: 'Career', image: 'assets/career.png', link: '/career' },
    { name: 'Hire Us', image: 'assets/hire-us.png', link: '/hire-us' },
    { name: 'Services', image: 'assets/services.png', link: '/services' },
    { name: 'Social', image: 'assets/social.png', link: '/social' },
  ];

}
