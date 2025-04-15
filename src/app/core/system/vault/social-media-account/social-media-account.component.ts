import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-social-media-account',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './social-media-account.component.html',
  styleUrl: './social-media-account.component.css'
})
export class SocialMediaAccountComponent {
  socialMediaForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.socialMediaForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.pattern('^[0-9]{10,15}$')]],
      profilePicture: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dateOfBirth: ['', Validators.required],
      location: [''],
      privacySettings: ['', Validators.required], // public or private

      security: this.fb.group({
        twoFactorAuth: [false],
        backupCodes: ['']
      })
    });
  }

  onSubmit() {
    if (this.socialMediaForm.valid) {
      console.log('Form Data:', this.socialMediaForm.value);
    } else {
      console.log('Invalid Form');
    }
  }
}
