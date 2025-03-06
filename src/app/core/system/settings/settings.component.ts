import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
 settings: {name: string; link: string; logo: string; hint: string}[] = [
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
      name: "Vault",
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
  ];

}
