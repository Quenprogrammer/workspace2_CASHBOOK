import {Component, inject, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {addDoc, collection, Firestore, getFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-staffs',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './staffs.component.html',
  styleUrl: './staffs.component.css'
})export class StaffsComponent implements OnInit {
  isModalOpen: boolean = false;
  closeModal(): void {
    this.isModalOpen = false;
  }
  userForm!: FormGroup;
  firestore: Firestore;



  constructor(private fb: FormBuilder) {
    // Use the `inject` function to get Firestore
    this.firestore = inject(Firestore);
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      socialMedia: this.fb.group({
        behance: [''],
        whatsapp: [''],
        twitter: [''],
        facebook: ['']
      })
    });

    // Safely check the form control value using optional chaining
    const nameControl = this.userForm?.get('name');
    if (nameControl?.valid) {
      console.log(nameControl.value);
    }
  }


  // Handle form submission
  onSubmit(): void {
    if (this.userForm.valid) {
      const formData = this.userForm.value;

      // Save form data to Firestore
      this.addUserToFirestore(formData)
        .then(() => {
          console.log('User added successfully!');
          // Reset form after successful submission
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
      await addDoc(usersCollection, userData); // Adds the document to Firestore
    } catch (error) {
      console.error('Error saving user to Firestore', error);
    }
  }

}

