import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export class WebsiteComponent {
  websiteForm!: FormGroup;

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.websiteForm = this.fb.group({
      websiteName: ['', Validators.required],
      websiteUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
      websiteType: ['', Validators.required],
      websiteDescription: ['']
    });
  }

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    if (this.websiteForm.valid) {
      const formData = {
        websiteName: this.websiteForm.value.websiteName,
        websiteUrl: this.websiteForm.value.websiteUrl,
        websiteType: this.websiteForm.value.websiteType,
        websiteDescription: this.websiteForm.value.websiteDescription || null,
        submittedAt: new Date()
      };

      try {
        // Save data to Firestore with auto-generated document ID
        await addDoc(collection(this.firestore, 'websites'), formData);
        console.log('Website data saved to Firestore');
        alert('Website information submitted successfully!');

        // Reset the form after submission
        this.websiteForm.reset();
      } catch (error) {
        console.error('Error saving data to Firestore:', error);
        alert('There was an error submitting the form.');
      }
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
