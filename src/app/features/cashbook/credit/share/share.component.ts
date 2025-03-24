import {Component, signal, WritableSignal} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

import {window} from 'rxjs';
@Component({
  selector: 'app-share',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './share.component.html',
  styleUrl: './share.component.css'
})
export class ShareComponent {
  private clipboard: Clipboard;

  showSuccessMessage: WritableSignal<boolean> = signal(false);
  isModalOpen: boolean = false; // Modal state

  // Social media list with name, icon class, and share URL format
  socialMedia = [
    { name: 'Facebook', icon: 'bi-facebook', url: 'https://www.facebook.com/sharer/sharer.php?u=' },
    { name: 'Twitter', icon: 'bi-twitter', url: 'https://twitter.com/intent/tweet?url=' },
    { name: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/sharing/share-offsite/?url=' },
    { name: 'WhatsApp', icon: 'bi-whatsapp', url: 'https://api.whatsapp.com/send?text=' },
    { name: 'Telegram', icon: 'bi-telegram', url: 'https://t.me/share/url?url=' },
    { name: 'Reddit', icon: 'bi-reddit', url: 'https://www.reddit.com/submit?url=' },
    { name: 'Email', icon: 'bi-envelope', url: 'mailto:?body=' }
  ];

  constructor(clipboard: Clipboard) {
    this.clipboard = clipboard;
  }

  // Open the modal
  openModal(): void {
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal(): void {
    this.isModalOpen = false;
  }

/*
  copyToClipboard() {
    this.clipboard.copy(this.currentPageUrl);
    this.showSuccessMessage.set(true);
    setTimeout(() => this.showSuccessMessage.set(false), 5000);
  }
*/

  protected readonly window = window;
  protected readonly encodeURIComponent = encodeURIComponent;
}
