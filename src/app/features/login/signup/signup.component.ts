import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';
import bcrypt from 'bcryptjs';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]) // Stronger password enforcement
  });

  errorMessage = '';
  successMessage = '';

  constructor(private firestore: Firestore) {}

  async onSubmit() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }

    // Ensure username and password are valid strings
    const username = this.registerForm.value.username?.trim().toLowerCase() || '';
    const password = this.registerForm.value.password || '';

    if (!password) {
      this.errorMessage = 'Password cannot be empty';
      return;
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10); // ✅ Secure hashing
      const usersCollection = collection(this.firestore, 'users');

      await addDoc(usersCollection, { username, password: hashedPassword });

      this.successMessage = 'User registered successfully!';
      this.errorMessage = '';
      this.registerForm.reset();
    } catch (error) {
      this.errorMessage = 'Registration failed. Try again.';
      console.error('Error:', error);
    }
  }
}
