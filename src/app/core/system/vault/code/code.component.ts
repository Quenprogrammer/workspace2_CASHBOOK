import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent {
  codeUploadForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private firestore: Firestore) {}

  ngOnInit(): void {
    this.codeUploadForm = this.fb.group({
      codeFile: [null, Validators.required],
      description: ['', Validators.required],
      language: ['', Validators.required]
    });
  }

  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.codeUploadForm.patchValue({ codeFile: file });
    }
  }

  async onSubmit(): Promise<void> {
    if (this.codeUploadForm.valid) {
      try {
        const data = {
          description: this.codeUploadForm.value.description,
          language: this.codeUploadForm.value.language,
          fileName: this.selectedFile?.name || '',
          uploadedAt: new Date()
        };

        await addDoc(collection(this.firestore, 'code-uploads'), data);
        console.log('Data saved to Firestore');

        this.codeUploadForm.reset();
        this.selectedFile = null;
      } catch (error) {
        console.error('Error saving to Firestore:', error);
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
