import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-nin',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './nin.component.html',
  styleUrl: './nin.component.css'
})
export class NINComponent {
  ninForm!: FormGroup;

  constructor(private fb: FormBuilder) {
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

  onFileSelect(event: any, field: string) {
    const file = event.target.files[0];
    if (file) {
      this.ninForm.patchValue({ [field]: file });
    }
  }

  onSubmit() {
    if (this.ninForm.valid) {
      console.log('Form Data:', this.ninForm.value);
    } else {
      console.log('Invalid Form');
    }
  }
}
