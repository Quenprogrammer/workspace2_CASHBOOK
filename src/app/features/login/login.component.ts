import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Firestore, collectionData, collection, query, where } from '@angular/fire/firestore';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Observable, take } from 'rxjs';

interface User {
  id: string;
  username: string;
  password: string;
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
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private firestore: Firestore, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]) // Enforcing minimum password length
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      let { username, password } = this.loginForm.value;

      username = username.trim().toLowerCase();
      password = password.trim().toLowerCase();

      const usersCollection = collection(this.firestore, 'users');
      const q = query(usersCollection, where('username', '==', username));

      collectionData<User>(q, { idField: 'id' }).pipe(take(1)).subscribe({
        next: (users: User[]) => {
          if (users.length > 0) {
            const user = users[0];

            if (user.password.toLowerCase() === password) {
              console.log('Login successful');

              // ✅ Store authentication status in localStorage
              localStorage.setItem('userToken', JSON.stringify({ username: user.username, id: user.id }));

              this.router.navigate(['/menu']);
            } else {
              console.log('Invalid password');
              this.navigateToInvalidAccount();
            }
          } else {
            console.log('Username not found');
            this.navigateToInvalidAccount();
          }
        },
        error: (err: any) => {
          console.error('Error querying Firestore:', err);
          this.navigateToInvalidAccount();
        }
      });
    }
  }

  private navigateToInvalidAccount(): void {
    this.router.navigate(['/invalidAccount']).catch((err: any) => {
      console.error('Error during navigation to invalid account:', err);
    });
  }
}
