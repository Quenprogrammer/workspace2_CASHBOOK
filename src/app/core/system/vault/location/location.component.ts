import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './location.component.html',
  styleUrl: '../global.scss'
})
export class LocationComponent {
  addressForm!: FormGroup;
  isModalOpen1= true;
  closeModal(): void {
    this.isModalOpen1= false;
  }
  openModal(): void {
    this.isModalOpen1= true;
  }
  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addressForm.valid) {
      console.log('Address Data:', this.addressForm.value);
      alert('Address information submitted successfully!');
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
