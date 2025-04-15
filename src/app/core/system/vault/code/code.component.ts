import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent {
  codeUploadForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form group with form controls
    this.codeUploadForm = this.fb.group({
      codeFile: [null, Validators.required],
      description: ['', Validators.required],
      language: ['', Validators.required]
    });
  }

  // Handle file selection
  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      // Set the selected file to the form control
      this.codeUploadForm.patchValue({ codeFile: file });
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.codeUploadForm.valid) {
      const formData = new FormData();
      formData.append('codeFile', this.selectedFile as Blob);
      formData.append('description', this.codeUploadForm.value.description);
      formData.append('language', this.codeUploadForm.value.language);

      // Send the data to the backend, e.g., using an HTTP service
      console.log('Form Data:', formData);

      // Example of how you might submit the form data
      // this.uploadService.uploadCode(formData).subscribe(response => {
      //   console.log(response);
      // });

      // Reset the form after submission
      this.codeUploadForm.reset();
      this.selectedFile = null;
    } else {
      console.log('Form is invalid');
    }
  }
}
