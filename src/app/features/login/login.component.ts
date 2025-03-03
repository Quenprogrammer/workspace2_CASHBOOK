import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Firestore, collectionData, collection, query, where } from '@angular/fire/firestore';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Observable, take } from 'rxjs';
import * as bcrypt from 'bcryptjs'; // ✅ Secure password checking

interface User {
  id: string;
  username: string;
  password: string; // Stored as hashed password
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent /*implements OnInit*/ {
 /* loginForm!: FormGroup;
  errorMessage = '';

  constructor(private firestore: Firestore, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]) // Stronger security
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }

    let username = this.loginForm.value.username?.trim().toLowerCase() || '';
    let password = this.loginForm.value.password || '';

    if (!password) {
      this.errorMessage = 'Password cannot be empty';
      return;
    }

    const usersCollection = collection(this.firestore, 'users');
    const q = query(usersCollection, where('username', '==', username));

    collectionData<User>(q, { idField: 'id' }).pipe(take(1)).subscribe({
      next: async (users: User[]) => {
        if (users.length > 0) {
          const user = users[0];

          // ✅ Compare hashed password securely
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            console.log('Login successful');
            localStorage.setItem('userToken', JSON.stringify({ username: user.username, id: user.id }));
            this.router.navigate(['/menu']);
          } else {
            this.errorMessage = 'Invalid password';
            this.navigateToInvalidAccount();
          }
        } else {
          this.errorMessage = 'Username not found';
          this.navigateToInvalidAccount();
        }
      },
      error: (err: any) => {
        console.error('Error querying Firestore:', err);
        this.errorMessage = 'An error occurred. Please try again.';
        this.navigateToInvalidAccount();
      }
    });
  }

  private navigateToInvalidAccount(): void {
    this.router.navigate(['/invalidAccount']).catch((err: any) => {
      console.error('Error during navigation:', err);
    });
  }*/
}
