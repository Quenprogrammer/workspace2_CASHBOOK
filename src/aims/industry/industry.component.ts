import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from '@angular/common';
export interface SystemInfo {
  key: string;
  token: string;
}
@Component({
  selector: 'app-industry',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './industry.component.html',
  styleUrl: './industry.component.css'
})
export class IndustryComponent  implements OnInit{
  os!: string;
  platform!: string;
  browser!: string;
  browserVersion!: string;
  device!: string;
  screenResolution!: string;
  language!: string;
  timezone!: string;
  processor!: string;
  memory!: string;

  ngOnInit(): void {
    this.os = this.getOSName(navigator.userAgent);
    this.platform = navigator.platform;
    this.browser = this.getBrowserName(navigator.userAgent);
    this.browserVersion = this.getBrowserVersion(navigator.userAgent);
    this.device = this.getDeviceType(navigator.userAgent);
    this.screenResolution = `${window.screen.width}x${window.screen.height}`;
    this.language = navigator.language;
    this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.processor = this.getProcessorInfo();
    this.memory = this.getMemoryInfo();
  }

  getOSName(userAgent: string): string {
    if (userAgent.includes('Windows')) {
      return 'Windows';
    } else if (userAgent.includes('Macintosh')) {
      return 'macOS';
    } else if (userAgent.includes('Linux')) {
      return 'Linux';
    } else if (userAgent.includes('Android')) {
      return 'Android';
    } else if (userAgent.includes('iOS')) {
      return 'iOS';
    } else {
      return 'Unknown';
    }
  }

  getBrowserName(userAgent: string): string {
    if (userAgent.includes('Chrome')) {
      return 'Google Chrome';
    } else if (userAgent.includes('Firefox')) {
      return 'Mozilla Firefox';
    } else if (userAgent.includes('Safari')) {
      return 'Apple Safari';
    } else if (userAgent.includes('Edge')) {
      return 'Microsoft Edge';
    } else if (userAgent.includes('MSIE')) {
      return 'Internet Explorer';
    } else {
      return 'Unknown';
    }
  }

  getBrowserVersion(userAgent: string): string {
    const regex = /Chrome\/(\d+)|Firefox\/(\d+)|Safari\/(\d+)|Edge\/(\d+)|MSIE (\d+)/;
    const match = userAgent.match(regex);
    if (match) {
      return match[1] || match[2] || match[3] || match[4] || match[5];
    } else {
      return 'Unknown';
    }
  }

  getDeviceType(userAgent: string): string {
    if (userAgent.includes('Mobile')) {
      return 'Mobile';
    } else if (userAgent.includes('Tablet')) {
      return 'Tablet';
    } else {
      return 'Desktop';
    }
  }

  getProcessorInfo(): string {
    // Note: This is a very basic implementation and may not work for all systems.
    // For a more accurate implementation, you may need to use a library or API that provides processor information.
    return 'Unknown';
  }

  getMemoryInfo(): string {
    // Note: This is a very basic implementation and may not work for all systems.
    // For a more accurate implementation, you may need to use a library or API that provides memory information.
    return 'Unknown';
  }



}
