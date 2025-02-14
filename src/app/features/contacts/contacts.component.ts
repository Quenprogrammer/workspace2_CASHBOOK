import { Component } from '@angular/core';
import {Contact, ContactService} from '../../services/contact/contact.service';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,

    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form with validation
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], // Name field with validation
      email: ['', [Validators.required, Validators.email]], // Email field with validation
      address: ['', [Validators.required, Validators.minLength(5)]], // Address should have required and minLength validation
      phoneNumbers: this.fb.array([ // Initial phone number field
        ['', [Validators.required, Validators.pattern(/^\d{10}$/)]] // Phone number should be 10 digits long (adjust pattern if needed)
      ]),
      info: ['', [Validators.required]] // Additional Information
    });
  }

  // Getter for phone numbers form array
  get phoneNumbers(): FormArray {
    return this.contactForm.get('phoneNumbers') as FormArray;
  }

  // Add a new phone number field
  addPhoneNumber(): void {
    this.phoneNumbers.push(
      this.fb.control('', [Validators.required, Validators.pattern(/^\d{10}$/)]) // You can adjust the pattern if needed
    );
  }

  // Remove a phone number field
  removePhoneNumber(index: number): void {
    this.phoneNumbers.removeAt(index);
  }

  // Handle form submission
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      // You can send this form data to your backend server for further processing
    } else {
      console.log('Form is invalid');
    }
  }

}
