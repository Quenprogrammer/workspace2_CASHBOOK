import { Component, OnInit, inject, signal } from '@angular/core';
import { collection } from "firebase/firestore";
import { Firestore, getCountFromServer } from "@angular/fire/firestore";
import { NgForOf, NgIf } from "@angular/common";
import { DocDeleteService } from "./doc-delete.service";

export interface resetItems {
  name: string;
  collection: string;
  sitemapLink: string;
  logo: string;
  description: string;
  lastUpdate: string;
  previewButton: boolean;
  editButton: boolean;
}

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [
    NgIf


  ],
  templateUrl: './system.component.html',
  styleUrl: './system.component.scss'
})
export class SystemComponent implements OnInit{
  firestore: Firestore = inject(Firestore);
  constructor(private docDeleteService: DocDeleteService) {}

  defaults: resetItems[] = [
    {
      name: "FAQ",
      collection: "SOCIAL_MEDIA_ACCOUNTS",
      sitemapLink: "/faq",
      logo: "assets/icons/polaris_icons_new/ComposeMajor.svg",
      description: "Manage frequently asked questions and provide quick responses for end-users.",
      lastUpdate: "",
      previewButton: true,
      editButton: true
    },
    {
      name: "Terms of services",
      collection: "TERMS_OF_SERVICE",
      sitemapLink: "/faq",
      logo: "assets/icons/polaris_icons_new/EnableSelectionMinor.svg",
      description: "Update and manage the terms of service document for users.",
      lastUpdate: "",
      previewButton: true,
      editButton: true
    },
    {
      name: "Contact Details",
      collection: "CONTACT_INFORMATION",
      sitemapLink: "/faq",
      logo: "assets/icons/polaris_icons_new/CustomersMinor.svg",
      description: "Edit and manage contact information for customer support and inquiries.",
      lastUpdate: "",
      previewButton: true,
      editButton: true
    },
    {
      name: "Privacy",
      collection: "PRIVACY",
      sitemapLink: "/privacy-policy",
      logo: "assets/icons/polaris_icons_new/FraudProtectMinor.svg",
      description: "Edit and update privacy policies and data protection measures for the site.",
      lastUpdate: "",
      previewButton: true,
      editButton: true
    },
    {
      name: "Sitemap",
      collection: "SITEMAP",
      sitemapLink: "/sitemap",
      logo: "assets/icons/polaris_icons_new/DomainNewMajor.svg",
      description: "Manage and structure the site map for improved user navigation and SEO.",
      lastUpdate: "",
      previewButton: true,
      editButton: true
    },
    {
      name: "Insurance",
      collection: "INSURANCE",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/MarketsFilledMajor.svg",
      description: "Administer and update insurance product information available on the site.",
      lastUpdate: "",
      previewButton: true,
      editButton: true
    },
    {
      name: "Site Information",
      collection: "SITE_INFORMATION",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/DesktopMajor.svg",
      description: "Update and manage site information like contact details, policies, and more.",
      lastUpdate: "",
      previewButton: true,
      editButton: true
    },
    {
      name: "Home Settings",
      collection: "HOME_SETTINGS",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/LabelPrinterMajor.svg",
      description: "Configure the appearance and functionality of the homepage for better user engagement.",
      lastUpdate: "",
      previewButton: true,
      editButton: true
    },
    {
      name: "Services",
      collection: "SERVICE_TEMPLATE_PAGES",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/MarkFulfilledMinor.svg",
      description: "Manage and update the services offered by the platform.",
      lastUpdate: "",
      previewButton: true,
      editButton: true
    },
    {
      name: "Leads",
      collection: "LEADS",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/FollowUpEmailMajor.svg",
      description: "Track and manage leads generated through various marketing campaigns.",
      lastUpdate: "",
      previewButton: true,
      editButton: true
    },
    {
      name: "Realty Academy",
      collection: "REALTY_ACADEMY",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/LegalMajor.svg",
      description: "Manage courses and training materials for real estate professionals.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    },
    {
      name: "News and Press",
      collection: "NEWS_ARTICLES_POSTS",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/PaperCheckMajor.svg",
      description: "Update and manage news articles, press releases, and media content.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    },
    {
      name: "Agents",
      collection: "AGENTS",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/IdentityCardMajor.svg",
      description: "Add, edit, and manage the agents associated with your platform.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    },
    {
      name: "Properties",
      collection: "PROPERTIES",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/FinancesMinor.svg",
      description: "Review and manage property listings available on the platform.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    },
    {
      name: "Admin site logs",
      collection: "ADMIN_SITE_LOG",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/FinancesMinor.svg",
      description: "View and analyze site activity logs for auditing and troubleshooting purposes.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    },
    {
      name: "Courses",
      collection: "COURSES",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/FinancesMinor.svg",
      description: "Manage training courses and learning materials for staff or customers.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    },
    {
      name: "Currency",
      collection: "CURRENCY",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/FinancesMinor.svg",
      description: "Manage the site's currency settings for transactions and billing.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    },
    {
      name: "Email queue",
      collection: "EMAIL_QUEUE",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/FinancesMinor.svg",
      description: "Manage email queues for system notifications and user correspondence.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    },
    {
      name: "Invited Users",
      collection: "INVITED_USERS",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/FinancesMinor.svg",
      description: "Manage and review users who have been invited to the platform.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    },
    {
      name: "Careers",
      collection: "CAREERS",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/FinancesMinor.svg",
      description: "Post job listings and manage the organization's career portal.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    },
    {
      name: "User saved data",
      collection: "USERS_SAVED_DATA",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/FinancesMinor.svg",
      description: "Access and manage saved user data and preferences within the platform.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    },
    {
      name: "News articles post",
      collection: "NEWS_ARTICLES_POSTS",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/FinancesMinor.svg",
      description: "Manage and publish news articles on the platform.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    },
    {
      name: "Site logs",
      collection: "",
      sitemapLink: "/insurance",
      logo: "assets/icons/polaris_icons_new/FinancesMinor.svg",
      description: "Monitor and review logs of system events and user activities.",
      lastUpdate: "",
      previewButton: false,
      editButton: true
    }
  ];


  counts = signal({
    AGENTS: 0,
    CAREERS: 0,
    COURSES: 0,
    FAQS: 0,
    PRIVACY: 0,
    SITEMAP: 0,
    PROPERTY_CATALOGUE: 0,
    INSURANCE: 0,
    SITE_INFORMATION: 0,
    HOME_SETTINGS: 0,
    SERVICE_TEMPLATE_PAGES: 0,
    LEADS: 0,
    REALTY_ACADEMY: 0,
    NEWS_ARTICLES_POSTS: 0,
    USERS_SAVED_DATA: 0,
    PROPERTIES: 0,
    EMAIL_QUEUE: 0,
    CURRENCY: 0,
    TERMS_OF_SERVICE: 0,
    CONTACT_INFORMATION: 0,
    SOCIAL_MEDIA_ACCOUNTS: 0,
    INVITED_USERS: 0,
    ADMIN_SITE_LOG: 0
  });


  // Signal to track selected items dynamically
  selectedItems = signal<string[]>([]);

  // Method to fetch counts from Firestore
  async fetchCounts() {
    const collections = [
      'AGENTS',
      'CAREERS',
      'COURSES',
      'FAQS',
      'PRIVACY',
      'SITEMAP',
      'PROPERTY_CATALOGUE',
      'INSURANCE',
      'SITE_INFORMATION',
      'HOME_SETTINGS',
      'SERVICE_TEMPLATE_PAGES',
      'LEADS',
      'REALTY_ACADEMY',
      'NEWS_ARTICLES_POSTS',
      'USERS_SAVED_DATA',
      'PROPERTIES',
      'EMAIL_QUEUE',
      'CURRENCY',
      'TERMS_OF_SERVICE',
      'CONTACT_INFORMATION',
      'SOCIAL_MEDIA_ACCOUNTS',
      'INVITED_USERS',
      'ADMIN_SITE_LOG'
    ];

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

  // Method to get the count for an item
  getCountForItem(name: string): number {
    const map: Record<string, keyof ReturnType<typeof this.counts>> = {
      'Careers': 'CAREERS',
      'FAQ': 'FAQS',
      'Privacy': 'PRIVACY',
      'Sitemap': 'SITEMAP',
      'Property Catalogue': 'PROPERTY_CATALOGUE',
      'Insurance': 'INSURANCE',
      'Agents': 'AGENTS', // Fixed to match the "name" correctly
      'Courses': 'COURSES',
      'Site Information': 'SITE_INFORMATION',
      'Home Settings': 'HOME_SETTINGS',
      'Service Template Pages': 'SERVICE_TEMPLATE_PAGES',
      'Leads': 'LEADS',
      'Realty Academy': 'REALTY_ACADEMY',
      'News Articles Posts': 'NEWS_ARTICLES_POSTS',
      'Users Saved Data': 'USERS_SAVED_DATA',
      'Properties': 'PROPERTIES',
      'Email Queue': 'EMAIL_QUEUE',
      'Currency': 'CURRENCY',
      'Terms of Service': 'TERMS_OF_SERVICE',
      'Contact Information': 'CONTACT_INFORMATION',
      'Social Media Accounts': 'SOCIAL_MEDIA_ACCOUNTS',
      'Invited Users': 'INVITED_USERS',
      'Admin Site Log': 'ADMIN_SITE_LOG'
    };

    const key = map[name];
    return key ? this.counts()[key] ?? 0 : 0;
  }
// Make sure fetchCounts is called when the component loads
  ngOnInit(): void {
    this.fetchCounts().then(() => {
      console.log("Counts fetched successfully!");
    }).catch((error) => {
      console.error("Error fetching counts:", error);
    });
  }



  deleteCollection(collections: string[]): void {
    collections.forEach(collection => {
      this.docDeleteService.deleteCollection(collection).then(() => {
        console.log(`${collection} collection deleted successfully`);
      }).catch((err) => {
        console.error(`Error deleting collection ${collection}:`, err);
      });
    });
  }
  onCheckboxChange(collection: string, event: any): void {
    const selected = this.selectedItems();

    if (event.target.checked) {
      // Add collection to the array if checked
      this.selectedItems.set([...selected, collection]);
    } else {
      // Remove collection from the array if unchecked
      this.selectedItems.set(selected.filter(item => item !== collection));
    }

    console.log(this.selectedItems());  // Log selected items to the console
  }


  toggleSelectAll(): void {
    const allCollections = this.defaults.map(item => item.collection);
    const currentlySelected = this.selectedItems();

    if (currentlySelected.length === allCollections.length) {
      // Deselect all
      this.selectedItems.set([]);
    } else {
      // Select all
      this.selectedItems.set(allCollections);
    }
  }

}
