import {Component, inject, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {addDoc, collection, Firestore, getFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-staffs',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './staffs.component.html',
  styleUrl: './staffs.component.css'
})export class StaffsComponent implements OnInit {
  userForm!: FormGroup;
  firestore: Firestore;
  isModal1Open = false;
  constructor(private fb: FormBuilder) {
    this.firestore = inject(Firestore);
  }
  connectedAccounts: any[] = [
    {
      name: 'Google',
      description: 'Calendar and contacts',
      image: '../assets/svg/brands/google-icon.svg',
      formControlName: 'google'
    },
    {
      name: 'Facebook',
      description: 'Social Media',
      image: '../assets/svg/brands/facebook-icon.svg',
      formControlName: 'facebook'
    },


    {
      name: 'Whatsapp',
      description: 'sending message',
      image: '../assets/svg/brands/Whatsapp-icon.svg',
      formControlName: 'Whatsapp'
    }
  ];
  ngOnInit(): void {
    // Define the form group with the necessary controls
    this.userForm = this.fb.group({
      profilePhoto: [''], // Handling file upload (can store the file URL later)
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''], // Optional
      google: [false],
      facebook: [false],
      Gmail: [false],
      Whatsapp: [false]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const formData = this.userForm.value;

      // Extract connected accounts (checkboxes that are selected)
      const connectedAccounts = this.connectedAccounts.filter(
        (account) => formData[account.formControlName]
      );

      const userData = {
        ...formData,
        connectedAccounts, // Add selected connected accounts to user data
      };

      // Save form data to Firestore
      this.addUserToFirestore(userData)
        .then(() => {
          console.log('User added successfully!');
          this.userForm.reset();
        })
        .catch((error) => {
          console.error('Error adding user:', error);
        });
    } else {
      console.log('Form is invalid!');
    }
  }

  // Add user data to Firestore collection
  async addUserToFirestore(userData: any): Promise<void> {
    try {
      const usersCollection = collection(this.firestore, 'users');
      await addDoc(usersCollection, userData);
    } catch (error) {
      console.error('Error saving user to Firestore', error);
    }
  }

  // Handle modal close
  closeModal(): void {
    // Logic for closing the modal goes here
  }

  test=[
    {name:''},
    {name:''},
    {name:''},
    {name:''},
    {name:''},
    {name:''},
    {name:''},
    {name:''},
    {name:''},
    {name:''},
    {name:''},
    {name:''},
  ]
}

