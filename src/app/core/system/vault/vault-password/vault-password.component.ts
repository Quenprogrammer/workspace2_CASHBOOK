import { Component } from '@angular/core';
import {NotificationService} from '../../../../services/notification/notification.service';
import {pass,fail} from '../../variables';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-vault-password',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './vault-password.component.html',
  styleUrl: './vault-password.component.css'
})
export class VaultPasswordComponent {

  constructor(private firestoreService: NotificationService,private router: Router) {}
  verificationCodes = [
    { id: 'user1', p1: 3, p2: 4, p3: 1, p4: 8 },
    { id: 'user2', p1: 5, p2: 7, p3: 2, p4: 9 },
    // Add more codes as needed
  ];

  // Store the user input code
  verificationCode: string[] = ['', '', '', ''];  // Array to store 4 input digits



  // Automatically move focus to the next input field when a digit is entered
  focusNext(event: any, nextInputId: string): void {
    const nextInput = document.getElementById(nextInputId) as HTMLInputElement;
    // Move to the next input if the current one is filled
    if (event.target.value.length === 1) {
      nextInput?.focus();
    }
  }

  // Verify the entered code against the stored verification codes
  verifyAccount(): void {
    const enteredCode = {
      p1: parseInt(this.verificationCode[0]),
      p2: parseInt(this.verificationCode[1]),
      p3: parseInt(this.verificationCode[2]),
      p4: parseInt(this.verificationCode[3]),
    };

    // Find the matching verification code from the stored list
    const matchedCode = this.verificationCodes.find(
      code =>
        code.p1 === enteredCode.p1 &&
        code.p2 === enteredCode.p2 &&
        code.p3 === enteredCode.p3 &&
        code.p4 === enteredCode.p4
    );

    if (matchedCode) {
      // If a match is found, navigate to the home route
      this.router.navigate(['/vault-app']);
      this.firestoreService.addUser('John Doe', pass, 'Login to vault');
    } else {
      // If no match is found, show an invalid account alert
      this.firestoreService.addUser('John Doe', fail, 'Login to vault');

      alert('Invalid verification code! Please try again.');
    }
  }

  // This method is triggered when the user presses "Enter" after entering the last field
  onSubmit(): void {
    this.verifyAccount();
  }

  // Optional: Resend the verification code (can implement logic as needed)

}
