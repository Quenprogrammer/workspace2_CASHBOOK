import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  addressForm: FormGroup;

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
