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
  styleUrls: ['./login.component.scss']  // Fixed 'styleUrl' to 'styleUrls'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;  // Use the definite assignment assertion

  constructor(private firestore: Firestore, private router: Router) {}

  ngOnInit(): void {
    // Initialize the form in ngOnInit
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Query Firestore for the username
      const usersCollection = collection(this.firestore, 'users');
      const q = query(usersCollection, where('username', '==', username));

      // Specify the User type in collectionData
      collectionData<User>(q, { idField: 'id' }).subscribe((users: User[]) => { // Add type annotation here
        if (users.length > 0) {
          const user = users[0];

          // Validate password
          if (user.password === password) {
            this.router.navigate(['/menu']);
          } else {
            this.router.navigate(['/invalid-page']);
          }
        } else {
          this.router.navigate(['/invalid-page']);
        }
      });
    }
  }
}
