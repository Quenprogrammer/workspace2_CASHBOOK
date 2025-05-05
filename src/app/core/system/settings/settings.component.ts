import {Component, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import { DataServiceService } from '../../../services/dataService';
import {collection, Firestore, getCountFromServer} from '@angular/fire/firestore';
import {
  PublicSiteHomePageComponent
} from '../../../../publicSite/public-site-home-page/public-site-home-page.component';
import {CreditedComponent} from '../../../features/transaction-history/credited/credited.component';
import {CreateAccountComponent} from '../../../features/create-account/create-account.component';
import {CreateUserAccountComponent} from '../../create-user-account/create-user-account.component';
import {CreateUserComponent} from '../../../features/create-user/create-user.component';
import {StorageComponent} from '../database/storage/storage.component';

import {CompanyProfileComponent} from '../../../features/company/company-profile/company-profile.component';
import {SecurityComponent} from './security/security.component';
import {ConfigComponent} from '../config/config.component';
import {DisplayConfigComponent} from '../config/display-config/display-config.component';
import {PaymentSetupComponent} from './payment-setup/payment-setup.component';
import {TextComponent} from '../../components/text/text.component';
import {companyName} from '../../../features/data/companyInformation';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    PublicSiteHomePageComponent,
    CreditedComponent,
    NgForOf,
    CreateAccountComponent,
    CreateUserAccountComponent,
    CreateUserComponent,
    StorageComponent,

    CompanyProfileComponent,
    SecurityComponent,
    ConfigComponent,
    DisplayConfigComponent,
    PaymentSetupComponent,
    TextComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

 settings: {name: string; link: string; logo: string; hint: string}[] = [
/*    {
      name: "Add User",
      link: "/createUser",
      logo: "logos/user.svg",
      hint: "Create a new user account easily",
    },
    {
      name: "Configuration",
      link: "/database",
      logo: "host-record-svgrepo-com.svg",
      hint: "Create a new user account easily",
    },
    {
      name: "Storage",
      link: "/database",
      logo: "host-record-svgrepo-com.svg",
      hint: "Create a new user account easily",
    },
    {
      name: "Payments",
      link: "/database",
      logo: "host-record-svgrepo-com.svg",
      hint: "Create a new user account easily",
    },
    {
      name: "Vault",
      link: "/x",
      logo: "recursive-server-svgrepo-com.svg",
      hint: "Create a new user account easily",
    },
    {
      name: "Updates",
      link: "/x",
      logo: "recursive-server-svgrepo-com.svg",
      hint: "Create a new user account easily",
    },
    {
      name: "Company",
      link: "https://example.com",
      logo: "logos/company.svg",
      hint: "Manage and update company information",
    },
    {
      name: "Notifications",
      link: "https://example.com",
      logo: "logos/company.svg",
      hint: "Manage and update company information",
    },
    {
      name: "Security",
      link: "https://example.com",
      logo: "logos/security.svg",
      hint: "Configure security settings and protocols",
    },
    {
      name: "Logs",
      link: "https://example.com",
      logo: "logos/logs.svg",
      hint: "View and manage activity logs efficiently",
    },
    {
      name: "Database",
      link: "https://example.com",
      logo: "logos/logs.svg",
      hint: "View and manage activity data efficiently",
    },
    {
      name: "Display",
      link: "https://example.com",
      logo: "logos/logs.svg",
      hint: "View and manage activity data efficiently",
    },
    {
      name: "Manage Users",
      link: "https://example.com",
      logo: "logos/logs.svg",
      hint: "View and manage activity data efficiently",
    },*/
  ];
  constructor(private firestoreService: DataServiceService) {}

  ngOnInit(): void {
    this.addLogTrack();
    void this.fetchCounts();
  }

  addLogTrack(): void {
    const now = new Date();
    const logTrack = {
      date: now.toLocaleDateString(),  // e.g., "17/04/2025"
      time: now.toLocaleTimeString(),  // e.g., "10:34:56 AM"
      action: 'Viewed Settings',
      user: 'admin',

    };

    this.firestoreService.addData('logs', logTrack)
      .then(() => console.log('LogTrack saved to Firestore'))
      .catch(error => console.error('Error saving LogTrack:', error));
  }
  isModalOpen = signal(false);
  previewModalOpen = signal(false);
  activeComponent = signal('');
  previewActiveComponent = signal('');
  firestore: Firestore = inject(Firestore);

  navItems = [
    {
      name: "Add User",
      link: "/createUser",
      logo: "logos/user.svg",
      hint: "Create a new user account easily",
    },
    {
      name: "Configuration",
      link: "/database",
      logo: "host-record-svgrepo-com.svg",
      hint: "Create a new user account easily",
    },
    {
      name: "Payments",
      link: "/database",
      logo: "host-record-svgrepo-com.svg",
      hint: "Create a new user account easily",
    },
    {
      name: "Storage",
      link: "/database",
      logo: "host-record-svgrepo-com.svg",
      hint: "Create a new user account easily",
    },
    {
      name: "Vault",
      link: "/x",
      logo: "recursive-server-svgrepo-com.svg",
      hint: "Create a new user account easily",
    },
    {
      name: "Updates",
      link: "/x",
      logo: "recursive-server-svgrepo-com.svg",
      hint: "Create a new user account easily",
    },
    {
      name: "Company",
      link: "https://example.com",
      logo: "logos/company.svg",
      hint: "Manage and update company information",
    },
    {
      name: "Notifications",
      link: "https://example.com",
      logo: "logos/company.svg",
      hint: "Manage and update company information",
    },
    {
      name: "Security",
      link: "https://example.com",
      logo: "logos/security.svg",
      hint: "Configure security settings and protocols",
    },
    {
      name: "Logs",
      link: "https://example.com",
      logo: "logos/logs.svg",
      hint: "View and manage activity logs efficiently",
    },
    {
      name: "Database",
      link: "https://example.com",
      logo: "logos/logs.svg",
      hint: "View and manage activity data efficiently",
    },
    {
      name: "Display",
      link: "https://example.com",
      logo: "logos/logs.svg",
      hint: "View and manage activity data efficiently",
    },
    {
      name: "Manage Users",
      link: "https://example.com",
      logo: "logos/logs.svg",
      hint: "View and manage activity data efficiently",
    },
  ];

  openModal(componentKey: string) {
    this.activeComponent.set(componentKey);
    this.isModalOpen.set(true);
  }

  openPreviewModal(componentKey: string) {
    this.previewActiveComponent.set(componentKey);
    this.previewModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.activeComponent.set('');
  }

  closePreviewModal() {
    this.previewModalOpen.set(false);
    this.previewActiveComponent.set('');
  }


  counts = signal({
    AGENTS: 0,
    CAREERS:0,
    COURSES:0,
    FAQS:0,
    PRIVACY:0,
    SITEMAP:0,
    PROPERTY_CATALOGUE:0,
    INSURANCE:0
  });
  async fetchCounts() {
    const collections = ['AGENTS', 'CAREERS','COURSES','FAQS', 'PRIVACY','SITEMAP','PROPERTY_CATALOGUE','INSURANCE'];

    for (const name of collections) {
      const ref = collection(this.firestore, name);
      const snapshot = await getCountFromServer(ref);
      const current = this.counts();
      this.counts.set({
        ...current,
        [name]: snapshot.data().count
      });
    }
  }


  protected readonly companyName = companyName;
}
