import {Component, inject} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastService} from '../../services/toast-services';
import {MessageInquiries} from '../cashbook/debit/debit.component';
import {Observable} from 'rxjs';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  firestore: Firestore = inject(Firestore);
  generalMessageInquiries = collection(this.firestore, 'General-inquiries');
  inquiriesMessage$: Observable<MessageInquiries[]>;

  constructor() {
    const generalMessageInquiries = collection(this.firestore, 'General-inquiries');
    this.inquiriesMessage$ = collectionData(generalMessageInquiries, { idField: 'id' }) as Observable<MessageInquiries[]>;
  }

  toastService = inject(ToastService);

  GeneralInquiriesMessage = new FormGroup({
    userName: new FormControl('', [Validators.required]),

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.pattern(/^\+?\d{10,15}$/)]),

  });

  onSubmit() {
    if (this.GeneralInquiriesMessage.valid) {
      const { userName,  email, password } = this.GeneralInquiriesMessage.value;
      addDoc(this.generalMessageInquiries, {
        userName,

        email,
        password,

      })
        .then((documentReference) => {
          this.toastService.show('', 'Message sent successfully', 'success');
          this.GeneralInquiriesMessage.reset();
        })
        .catch(e => {
          this.toastService.show('', 'Error encountered while sending message', 'danger');
        });
    } else {
      this.toastService.show('', 'Please fill in all required fields correctly.', 'danger');
    }
  }

  get userName() {
    return this.GeneralInquiriesMessage.get('userName');
  }

  get email() {
    return this.GeneralInquiriesMessage.get('email');
  }

  get password() {
    return this.GeneralInquiriesMessage.get('password');
  }



}
