import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {ToastService} from '../../app/services/toast-services';
import {addDoc, collection, collectionData, Firestore, Timestamp} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import Typed from "typed.js";
import {NgClass, NgIf, AsyncPipe, NgForOf,} from '@angular/common';
interface courseInquiry {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string; // Added phoneNumber here
  privacyCheck: boolean;
}


export interface hireUs {
  firstName: string;
  phoneNumber: string;
  message: string;
  email: string;
  lastName: string;

  type: string;
}


@Component({
  selector: 'app-hie-us',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    ReactiveFormsModule,
    AsyncPipe,
    NgForOf,
  ],
  templateUrl: './hie-us.component.html',
  styleUrl: './hie-us.component.css'
})
export class HieUsComponent {
  @ViewChild('scrollTarget') scrollTarget!: ElementRef;
  isSubmitting = false;
  firestore: Firestore = inject(Firestore);
  toastService = inject(ToastService);
  generalMessageInquiries = collection(this.firestore, 'LEADS');
  inquiriesMentorMessage$: Observable<courseInquiry[]>;
  courses$: Observable<hireUs[]>;


  constructor() {
    const generalMessageInquiries = collection(this.firestore, 'mentor-inquiries');
    this.inquiriesMentorMessage$ = collectionData(generalMessageInquiries, { idField: 'id' }) as Observable<courseInquiry[]>;
    const courseCollection = collection(this.firestore, 'REAL_ESTATE-ACADEMY_COURSES'); // Update with your collection name
    this.courses$ = collectionData(courseCollection, { idField: 'id' }) as Observable<hireUs[]>;
      }

  mentorInquiriesMessage = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.pattern(/^\+?\d{10,15}$/)]), // Corrected here
  });

  scrollToElement(): void {
    if (this.scrollTarget) {
      this.scrollTarget.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onSubmit() {

    this.isSubmitting = true;
    if (this.mentorInquiriesMessage.valid) {
      const { firstName, lastName, email, phoneNumber,message } = this.mentorInquiriesMessage.value;

      const dataToSubmit:  hireUs = {

          type: 'meet-a-mentor',
          firstName: firstName ?? '',
          lastName: lastName ?? '',
          email: email ?? '',
        message: message ?? '',
          phoneNumber: phoneNumber ?? '',



      };

      addDoc(this.generalMessageInquiries, dataToSubmit)
        .then(() => {
          this.isSubmitting = false;
          this.toastService.show('Success', 'We have received your submission successfully', 'info');
          this.scrollToElement();
          this.mentorInquiriesMessage.reset();
        })
        .catch(e => {
          this.isSubmitting = false;
          this.toastService.show('Error Message', 'Error encountered while sending message', 'danger');
        });
    } else {
      this.toastService.show('', 'Please fill in all required fields correctly.', 'danger');
    }
  }

  ngOnInit() {

    const options = {
      strings: ["future.", "potential.", "skills."],
      typeSpeed: 90,
      backSpeed: 30,
      backDelay: 2500,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    new Typed('.js-typedjs', options);
  }

  get firstName() {
    return this.mentorInquiriesMessage.get('firstName');
  }

  get email() {
    return this.mentorInquiriesMessage.get('email');
  }

  get phoneNumber() {
    return this.mentorInquiriesMessage.get('phoneNumber');
  }




}
