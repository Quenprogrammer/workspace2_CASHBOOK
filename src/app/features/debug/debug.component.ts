import { Component } from '@angular/core';
import {EncryptionService} from '../../services/encryption.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.css'
})
export class DebugComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private encryptionService: EncryptionService
  ) {
    this.form = this.fb.group({
      name: [''],
      address: [''],
      comment: ['']
    });
  }

  onSubmit() {
    const rawData = this.form.value;

    const encryptedData = {
      name: this.encryptionService.encrypt(rawData.name),
      address: this.encryptionService.encrypt(rawData.address),
      comment: this.encryptionService.encrypt(rawData.comment)
    };

    console.log('Encrypted form data:', encryptedData);
  }
}
