import {Component, inject} from '@angular/core';

import {

  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {ToastService} from '../../services/toast-services';
import {MessageInquiries} from '../../core/system/interface/contactInterface';
import {ContactListComponent} from './contact-list/contact-list.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,

    ReactiveFormsModule,
    NgClass,
    ContactListComponent,

  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  firestore: Firestore = inject(Firestore);
  generalMessageInquiries = collection(this.firestore, 'income');

  // Observable to store the inquiries
  inquiriesMessage$: Observable<MessageInquiries[]>;

  // Form group with the date automatically filled with the current date
  GeneralInquiriesMessage = new FormGroup({
    date: new FormControl(this.getCurrentDate(), [Validators.required]), // Set current date
    additionalInformation: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    socialMedia: new FormControl('', )
  });

  randomNumber = 0;
  min = 100000000;
  max = 999999999;

  // Inject ToastService through the constructor
  constructor(private toastService: ToastService) {
    this.inquiriesMessage$ = collectionData(this.generalMessageInquiries, { idField: 'id' }) as Observable<MessageInquiries[]>;
  }



  // Method to get the current date in YYYY-MM-DD format
  getCurrentDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Returns YYYY-MM-DD
  }

  onSubmit() {
    if (this.GeneralInquiriesMessage.valid) {
      const dataToSubmit = {
        ...this.GeneralInquiriesMessage.value,

        type: 'Report A Problem' // Add the type field
      };

      addDoc(this.generalMessageInquiries, dataToSubmit)
        .then(() => {
          this.GeneralInquiriesMessage.reset();
          this.GeneralInquiriesMessage.patchValue({ date: this.getCurrentDate() }); // Reset the date to the current date
          console.log('Transaction saved successfully');
          this.toastService.show('', 'Transaction saved successfully', 'success');
        })
        .catch((error) => {
          console.error('Error saving transaction:', error);
          this.toastService.show('', 'Error saving transaction', 'danger');
        });
    } else {
      console.log('Form is invalid');
      this.toastService.show('', 'Please fill in all required fields correctly.', 'danger');
    }
  }

  // Getters for form controls
  get date() {
    return this.GeneralInquiriesMessage.get('date');
  }

  get referenceNumber() {
    return this.GeneralInquiriesMessage.get('referenceNumber');
  }

  get additionalInformation() {
    return this.GeneralInquiriesMessage.get('additionalInformation');
  }

  get name() {
    return this.GeneralInquiriesMessage.get('name');
  }

  get phoneNumber() {
    return this.GeneralInquiriesMessage.get('phoneNumber');
  }

  get Email() {
    return this.GeneralInquiriesMessage.get('Email');
  }

  get socialMedia() {
    return this.GeneralInquiriesMessage.get('socialMedia');
  }


}
