import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-emails',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.css'
})
export class EmailsComponent {
  emailAccountForm!: FormGroup;
  isModalOpen1= false;
  closeModal(): void {
    this.isModalOpen1= false;
  }
  openModal(): void {
    this.isModalOpen1= true;
  }
  constructor(private fb: FormBuilder) {
    this.emailAccountForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      recoveryEmail: ['', [Validators.email]],
      phoneNumber: ['', [Validators.pattern('^[0-9]{10,15}$')]],

      security: this.fb.group({
        twoFactorAuth: [false],
        backupCodes: ['']
      }),

      subscriptionPreferences: this.fb.group({
        newsletters: [false],
        marketingEmails: [false]
      })
    });
  }

  onSubmit() {
    if (this.emailAccountForm.valid) {
      console.log('Form Data:', this.emailAccountForm.value);
    } else {
      console.log('Invalid Form');
    }
  }

}
