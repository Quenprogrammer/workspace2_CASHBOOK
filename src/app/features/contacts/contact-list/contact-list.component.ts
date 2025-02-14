import { Component, inject, OnInit } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { ToastService } from '../../../services/toast-services';
import { StorageService } from '../../../services/contact/storage.service';
import { Observable } from 'rxjs';

import { AsyncPipe, DecimalPipe, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';  // Import signal from Angular core
import { totalStorage } from '../../../core/system/variables/globalVariables';

interface MessageInquiries {
  id: string;
  date: string;
  additionalInformation: string;
  name: string;
  phoneNumber: number;
  Email: string;
  socialMedia: string;
}

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    FormsModule,
    DecimalPipe
  ],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  avatars = [];

  // Firestore setup
  firestore: Firestore = inject(Firestore);
  inquiriesCollection = collection(this.firestore, 'income');  // Firestore collection reference
  inquiries$: Observable<MessageInquiries[]>;

  // Use signals for reactive state
  totalTextLength = signal(0);
  availableStorage = signal(0);
  memorySize = signal(0);

  constructor(
    private toastService: ToastService,
    private storageService: StorageService // Inject the storage service
  ) {
    // Fetching all documents from the 'income' collection
    this.inquiries$ = collectionData(this.inquiriesCollection, { idField: 'id' }) as Observable<MessageInquiries[]>;

    // Optionally log the data for debugging
    this.inquiries$.subscribe(data => {
      console.log('Collection data: ', data);
    });
  }

  ngOnInit(): void {
    // Use the service to calculate text length and update signals
    this.inquiries$.subscribe(data => {
      const calculations = this.storageService.calculateTextLength(data);

      // Update signals with the calculated values
      this.totalTextLength.set(calculations.totalTextLength);
      this.memorySize.set(calculations.memorySize);
      this.availableStorage.set(calculations.availableStorage);
    });
  }

  // Method to delete a document from Firestore
  deleteInquiry(id: string) {
    const inquiryDocRef = doc(this.firestore, 'income', id);
    deleteDoc(inquiryDocRef)
      .then(() => {
        this.toastService.show('', 'Document deleted successfully!', 'success');
        console.log('Document deleted successfully');
      })
      .catch((error) => {
        this.toastService.show('', 'Error deleting document', 'danger');
        console.error('Error deleting document:', error);
      });
  }

  getRandomAvatar(): string {
    const randomIndex = Math.floor(Math.random() * this.avatars.length);
    return this.avatars[randomIndex];
  }

  protected readonly totalStorage = totalStorage;
}
