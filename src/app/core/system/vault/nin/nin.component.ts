import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-nin',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './nin.component.html',
  styleUrl: '../global.scss'
})
export class NINComponent {
  ninForm!: FormGroup;
  isModalOpen1 = true;

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.ninForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      uniqueNIN: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      photograph: [null, Validators.required],
      signature: [null],
      issueDate: ['', Validators.required],
      expiryDate: [''],
      issuingAuthority: ['', Validators.required]
    });
  }

  openModal(): void {
    this.isModalOpen1 = true;
  }

  closeModal(): void {
    this.isModalOpen1 = false;
  }

  onFileSelect(event: any, field: string) {
    const file = event.target.files[0];
    if (file) {
      this.ninForm.patchValue({ [field]: file });
    }
  }

  async onSubmit(): Promise<void> {
    if (this.ninForm.valid) {
      const formData = {
        fullName: this.ninForm.value.fullName,
        dateOfBirth: this.ninForm.value.dateOfBirth,
        address: this.ninForm.value.address,
        gender: this.ninForm.value.gender,
        nationality: this.ninForm.value.nationality,
        uniqueNIN: this.ninForm.value.uniqueNIN,
        photograph: this.ninForm.value.photograph,
        signature: this.ninForm.value.signature || null,
        issueDate: this.ninForm.value.issueDate,
        expiryDate: this.ninForm.value.expiryDate || null,
        issuingAuthority: this.ninForm.value.issuingAuthority,
        submittedAt: new Date()
      };

      try {
        // Save the data to Firestore in the 'ninForms' collection
        await addDoc(collection(this.firestore, 'ninForms'), formData);
        console.log('NIN form data saved to Firestore');
        alert('NIN information submitted successfully!');

        // Reset the form after successful submission
        this.ninForm.reset();
      } catch (error) {
        console.error('Error saving data to Firestore:', error);
        alert('There was an error submitting the form.');
      }
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
