import {Component, effect, EventEmitter, Input, Output, signal} from '@angular/core';
import {ImageUploadingService} from '../../../../services/fileUpload';
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader, NgbAccordionItem
} from '@ng-bootstrap/ng-bootstrap';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    NgbAccordionDirective,
    NgbAccordionCollapse,
    NgbAccordionHeader,
    NgbAccordionButton,
    NgbAccordionItem,
    NgbAccordionBody,
    NgForOf,
    FormsModule,
    DecimalPipe,
    NgIf
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  isModalOpen: boolean = false;
  textValue: string = ''; // Variable to store textbox value

  @Input() rentModules: { nameOfmodule: string; Options: { name: string; details: string; file: string }[] }[] = [];
  @Input() homeSettingsId!: string;
  @Output() rentModulesUpdated = new EventEmitter<any>();
  isModal1Open = false;


  removeModule(moduleIndex: number) {
    if (this.rentModules.length > moduleIndex) {
      this.rentModules.splice(moduleIndex, 1);
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }
  openModal(index: number) {
    this.isModalOpen = true;
  }
  async addModule() {
    if (!this.rentModules) {
      this.rentModules = [];
    }
    this.rentModules.push({ nameOfmodule: '', Options: [] });
  }

  async addOption(moduleIndex: number) {
    this.rentModules[moduleIndex].Options.push({ name: '', details: '', file: '' });
  }

  async removeOption(moduleIndex: number, optionIndex: number) {
    if (this.rentModules[moduleIndex].Options.length > optionIndex) {
      this.rentModules[moduleIndex].Options.splice(optionIndex, 1);
    }
  }

  rentOption = { photo: '' };
  BrowsePropertyUploadProgress = signal(0);
  BrowsePropertyDownloadURL = signal<string | null>(null);

  constructor(private imageUploadService: ImageUploadingService) {
    effect(() => {
      const url = this.imageUploadService.BrowsePropertyDownloadURL();
      if (url) {
        this.rentOption.photo = url;
        console.log(url);
      }
    });
  }

  BrowsePropertyOnFileSelected(event: Event, moduleIndex: number, optionIndex: number) {
    this.imageUploadService.BrowsePropertyOnFileSelected(event);
    this.uploadImage(moduleIndex, optionIndex);
  }

  uploadImage(moduleIndex: number, optionIndex: number) {
    this.imageUploadService.uploadImage();
    this.BrowsePropertyUploadProgress = this.imageUploadService.BrowsePropertyUploadProgress;
    this.BrowsePropertyDownloadURL = this.imageUploadService.BrowsePropertyDownloadURL;

    // When the upload completes, update the corresponding option's file URL
    effect(() => {
      const url = this.BrowsePropertyDownloadURL();
      if (url) {
        this.rentModules[moduleIndex].Options[optionIndex].file = url;
      }
    });
  }















  videoSrc: string | null = null; // Holds the video URL

  // Function to handle file selection
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Create a local URL for the selected video file
      this.videoSrc = URL.createObjectURL(file);
    }
  }

  // Function to remove the video
  removeVideo() {
    if (confirm('Are you sure you want to remove the video?')) {
      this.videoSrc = null;
    }
  }
}
