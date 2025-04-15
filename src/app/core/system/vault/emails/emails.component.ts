import { Component } from '@angular/core';

@Component({
  selector: 'app-emails',
  standalone: true,
  imports: [],
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.css'
})
export class EmailsComponent {
  emailAccountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailAccountForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      recoveryEmail: ['', [Validators.email]],
      phoneNumber: ['', [Validators.pattern('^[0-9]{10,15}$')]],

      security: this.fb.group({
        twoFactorAuth: [false],
        backupCodes: ['']
      }),

      subscriptionPreferences: this.fb.group({
        newsletters: [false],
        marketingEmails: [false]
      })
    });
  }

  onSubmit() {
    if (this.emailAccountForm.valid) {
      console.log('Form Data:', this.emailAccountForm.value);
    } else {
      console.log('Invalid Form');
    }
  }
}
