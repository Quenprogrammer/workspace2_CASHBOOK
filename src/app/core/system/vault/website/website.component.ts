import { Component } from '@angular/core';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export class WebsiteComponent {
  websiteForm: FormGroup;

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
