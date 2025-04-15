import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.websiteForm = this.fb.group({
      websiteName: ['', Validators.required],
      websiteUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
      websiteType: ['', Validators.required],
      websiteDescription: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.websiteForm.valid) {
      console.log('Website Data:', this.websiteForm.value);
      alert('Website information submitted successfully!');
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
