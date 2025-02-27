import {Component, inject, OnInit} from '@angular/core';
import {addDoc, collection, collectionData, Firestore, getDocs, query, where} from '@angular/fire/firestore';
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
export class CreateUserComponent implements OnInit{

  private firestore: Firestore = inject(Firestore);
  private toastService: ToastService = inject(ToastService);

  generalMessageInquiries = collection(this.firestore, 'General-inquiries');
  inquiriesMessage$: Observable<MessageInquiries[]> = collectionData(this.generalMessageInquiries, { idField: 'id' }) as Observable<MessageInquiries[]>;

  isSubmitting = false; // Button loading state

  ngOnInit(): void {
    // Call resetForm inside ngOnInit
    this.resetForm();
  }


  GeneralInquiriesMessage = new FormGroup({
    userName: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl<string>('', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl<string>('', [Validators.required]),
    recoveryPhrase: new FormControl<string>('', [Validators.required, Validators.minLength(12)]),
  });

  async onSubmit() {
    if (this.GeneralInquiriesMessage.valid) {
      const formData = this.GeneralInquiriesMessage.value as {
        userName: string;
        email: string;
        phoneNumber: string;
        password: string;
        confirmPassword: string;
        recoveryPhrase: string;
      };

      if (formData.password !== formData.confirmPassword) {
        this.toastService.show('Validation Error', 'Passwords do not match.', 'danger');
        return;
      }

      this.isSubmitting = true; // Disable button while checking

      try {
        // Query Firestore to check if email or phone exists
        const emailQuery = query(this.generalMessageInquiries, where('email', '==', formData.email));
        const phoneQuery = query(this.generalMessageInquiries, where('phoneNumber', '==', formData.phoneNumber));

        const emailSnapshot = await getDocs(emailQuery);
        const phoneSnapshot = await getDocs(phoneQuery);

        if (!emailSnapshot.empty) {
          this.toastService.show('Error', 'Email already exists. Please use a different email.', 'danger');
          this.isSubmitting = false;
          return;
        }

        if (!phoneSnapshot.empty) {
          this.toastService.show('Error', 'Phone number already exists. Please use a different number.', 'danger');
          this.isSubmitting = false;
          return;
        }

        // If email and phone don't exist, add user
        await addDoc(this.generalMessageInquiries, formData);
        this.toastService.show('Success', 'Account created successfully', 'success');
        this.resetForm();
      } catch (error) {
        this.toastService.show('Error', 'Error encountered while creating account', 'danger');
      } finally {
        this.isSubmitting = false; // Re-enable button
      }
    } else {
      this.toastService.show('Validation Error', 'Please fill in all required fields correctly.', 'danger');
    }
  }


  resetForm() {
    this.GeneralInquiriesMessage.reset();
    this.GeneralInquiriesMessage.markAsPristine();
    this.GeneralInquiriesMessage.markAsUntouched();
  }

  get userName() { return this.GeneralInquiriesMessage.get('userName'); }
  get email() { return this.GeneralInquiriesMessage.get('email'); }
  get phoneNumber() { return this.GeneralInquiriesMessage.get('phoneNumber'); }
  get password() { return this.GeneralInquiriesMessage.get('password'); }
  get confirmPassword() { return this.GeneralInquiriesMessage.get('confirmPassword'); }
  get recoveryPhrase() { return this.GeneralInquiriesMessage.get('recoveryPhrase'); }
}
