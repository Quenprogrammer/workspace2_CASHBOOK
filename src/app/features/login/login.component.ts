import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { Firestore, collectionData, collection, query, where } from '@angular/fire/firestore';
import {Router, RouterLink} from '@angular/router';
import { Observable } from 'rxjs';
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
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

      collectionData(q, { idField: 'id' }).subscribe(users => {
        if (users.length > 0) {
          const user = users[0] as any;

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
