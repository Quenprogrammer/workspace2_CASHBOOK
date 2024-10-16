import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
@Component({
  selector: 'app-invalid-user',
  standalone: true,
  imports: [],
  templateUrl: './invalid-user.component.html',
  styleUrl: './invalid-user.component.css'
})
export class InvalidUserComponent {
  constructor(private router: Router) {}

  // Method to navigate back to the login page
  returnToLogin(): void {
    this.router.navigate(['/login']).then(success => {
      if (success) {
        console.log('Navigation to login successful!');
      } else {
        console.error('Navigation to login failed!');
      }
    }).catch(err => {
      console.error('Error during navigation:', err);
    });
  }
}
