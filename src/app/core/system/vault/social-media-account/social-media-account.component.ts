import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

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

  constructor(private fb: FormBuilder, private firestore: Firestore) {
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

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    if (this.socialMediaForm.valid) {
      const formData = {
        username: this.socialMediaForm.value.username,
        fullName: this.socialMediaForm.value.fullName,
        email: this.socialMediaForm.value.email,
        phoneNumber: this.socialMediaForm.value.phoneNumber,
        profilePicture: this.socialMediaForm.value.profilePicture || null,
        password: this.socialMediaForm.value.password,
        dateOfBirth: this.socialMediaForm.value.dateOfBirth,
        location: this.socialMediaForm.value.location || null,
        privacySettings: this.socialMediaForm.value.privacySettings,
        security: {
          twoFactorAuth: this.socialMediaForm.value.security.twoFactorAuth,
          backupCodes: this.socialMediaForm.value.security.backupCodes || null
        },
        submittedAt: new Date()
      };

      try {
        // Save the data to Firestore in the 'socialMediaAccounts' collection
        await addDoc(collection(this.firestore, 'socialMediaAccounts'), formData);
        console.log('Social Media Account data saved to Firestore');
        alert('Social Media Account information submitted successfully!');

        // Reset the form after successful submission
        this.socialMediaForm.reset();
      } catch (error) {
        console.error('Error saving data to Firestore:', error);
        alert('There was an error submitting the form.');
      }
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
