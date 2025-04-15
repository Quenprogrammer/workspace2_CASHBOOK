import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-credentials',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './credentials.component.html',
  styleUrl: './credentials.component.css'
})
export class CredentialsComponent {
  credentialsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form group
    this.credentialsForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      securityQuestion: ['', Validators.required],
      securityAnswer: ['', Validators.required],
      twoFactorAuth: [false]  // boolean for 2FA
    }, {
      // Custom validator for password confirmation
      validators: this.passwordMatchValidator
    });
  }

  // Custom validator to check if password and confirm password match
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.credentialsForm.valid) {
      console.log(this.credentialsForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
