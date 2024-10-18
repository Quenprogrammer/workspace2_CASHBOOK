import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Firestore, collectionData, collection, query, where } from '@angular/fire/firestore';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';

// Define User interface for type safety
interface User {
  id: string;
  username: string;
  password: string; // Note: This should be handled securely
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
    // Initialize the login form with form controls and validators
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Query Firestore for the username
      const usersCollection = collection(this.firestore, 'users');
      const q = query(usersCollection, where('username', '==', username));

      // Fetch users and check credentials
      collectionData<User>(q, { idField: 'id' }).subscribe({
        next: (users: User[]) => {
          if (users.length > 0) {
            const user = users[0];

            // Secure password comparison should be done server-side
            if (user.password === password) {
              this.router.navigate(['/menu']).then(success => {
                if (success) {
                  console.log('Navigation to menu successful!');
                } else {
                  console.error('Navigation to menu failed!');
                }
              }).catch((err: any) => {
                console.error('Error during navigation to menu:', err);
              });
            } else {
              this.navigateToInvalidAccount();
            }
          } else {
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

  // Function to navigate to an invalid account page
  private navigateToInvalidAccount(): void {
    this.router.navigate(['/invalidAccount']).then(success => {
      if (success) {
        console.log('Navigation to invalid account successful!');
      } else {
        console.error('Navigation to invalid account failed!');
      }
    }).catch((err: any) => {
      console.error('Error during navigation to invalid account:', err);
    });
  }
}
