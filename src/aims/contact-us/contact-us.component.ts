import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

import { addDoc, collection, collectionData, Firestore, Timestamp } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { NgClass, NgIf } from "@angular/common";
import {ToastService} from '../../app/services/toast-services';
import {RouterLink} from '@angular/router';
import Typed from 'typed.js';

interface MessageInquiries {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  aboutProject: string;
}

interface ContactUsLeadSubmission {
  isNew: boolean,
  leadStatus: string,

  lead: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
  };
  createdOn: Timestamp;
  updated: Timestamp;
  updatedOn: Timestamp;
}

@Component({
  selector: 'tbr-contact-us',
  standalone: true,
  imports: [

    ReactiveFormsModule,
    NgClass,
    NgIf,
    RouterLink
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'] // Corrected to styleUrls
})
export class ContactUsComponent implements OnInit {
  @ViewChild('scrollTarget') scrollTarget!: ElementRef;
  isSubmitting = false;
  toastService = inject(ToastService);
  firestore: Firestore = inject(Firestore);
  generalMessageInquiries = collection(this.firestore, 'LEADS');
  inquiriesMessage$: Observable<MessageInquiries[]>;

  constructor() {
    const generalMessageInquiries = collection(this.firestore, 'General-inquiries');
    this.inquiriesMessage$ = collectionData(generalMessageInquiries, { idField: 'id' }) as Observable<MessageInquiries[]>;
  }

  GeneralInquiriesMessage = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.pattern(/^\+?\d{10,15}$/)]),
    aboutProject: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  scrollToElement(): void {
    if (this.scrollTarget) {
      this.scrollTarget.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onSubmit() {
    this.isSubmitting = true;
    if (this.GeneralInquiriesMessage.valid) {
      const { firstName, lastName, email, phoneNumber, aboutProject } = this.GeneralInquiriesMessage.value;

      const dataToSubmit: ContactUsLeadSubmission = {
        isNew: true,
        leadStatus: 'unread',

        lead: {
          firstName: firstName ?? '',
          lastName: lastName ?? '',
          email: email ?? '',
          phoneNumber: phoneNumber ?? '',
          message: aboutProject ?? ''
        },
        updatedOn: Timestamp.now(),
        updated: Timestamp.now(),
        createdOn: Timestamp.now()
      };

      addDoc(this.generalMessageInquiries, dataToSubmit)
        .then(() => {
          this.isSubmitting = false;
         /* this.toastService.show('Success', 'We have received your submission successfully', 'info');
         */ this.scrollToElement();
          this.GeneralInquiriesMessage.reset();
        })
        .catch(e => {
          this.isSubmitting = false;
       /*   this.toastService.show('Error Message', 'Error encountered while sending message', 'danger');
      */  });
    } else {
   /*   this.toastService.show('', 'Please fill in all required fields correctly.', 'danger');
  */  }
  }

 /* options: google.maps.MapOptions = {
    center: { lat: 35.3213, lng: 33.3415 },
    zoom: 12
  };*/

  get firstName() {
    return this.GeneralInquiriesMessage.get('firstName');
  }

  get email() {
    return this.GeneralInquiriesMessage.get('email');
  }

  get phoneNumber() {
    return this.GeneralInquiriesMessage.get('phoneNumber');
  }

  get aboutProject() {
    return this.GeneralInquiriesMessage.get('aboutProject');
  }

  ngOnInit() {

    const options = {
      strings: ["modern", "creative", "professional"],
      typeSpeed: 90,
      backSpeed: 30,
      backDelay: 2500,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    new Typed('.js-typedjs', options);
  }

  facebook:string='';
  tiktok:string='';
  instagram:string='';
  youtube:string='';
  number:string='+2349036014519'
  address:string='Danladi Nasidi Estate KANO, Kano state Nigeria'
}
