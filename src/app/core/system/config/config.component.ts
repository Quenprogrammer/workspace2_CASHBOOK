import {Component, inject, OnInit} from '@angular/core';
import {KeyValuePipe, NgForOf, NgIf} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {DataStorageService} from './data-storage.service';
import {DisplayConfigComponent} from './display-config/display-config.component';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    NgIf,
    KeyValuePipe,
    DisplayConfigComponent
  ],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent implements OnInit {
  storedData: Record<string, any> | null = null;
  retrievedData: Record<string, any> = {};

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    // Call fetchAndStoreFirestoreData() and handle the promise
    this.dataStorageService.fetchAndStoreFirestoreData()
      .then(() => {
        // After fetching, subscribe to the stored data and local storage data
        this.dataStorageService.storedData$.subscribe((data) => {
          if (data) {
            this.storedData = data;
            console.log('✅ Stored Data from Firestore:', this.storedData);
          }
        });

        this.dataStorageService.retrievedData$.subscribe((data) => {
          this.retrievedData = data;
          console.log('📦 Retrieved Data from localStorage:', this.retrievedData);
        });
      })
      .catch((error) => {
        console.error('Error fetching and storing data:', error);
      });
  }


}
