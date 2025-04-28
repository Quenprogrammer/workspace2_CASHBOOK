import {Component, inject} from '@angular/core';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {
  firestore = inject(Firestore);
  logForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Create the form group
    this.logForm = this.fb.group({
      jobTitle: [''],
      location: [''],
      status: [''],
      date: [''],
      action: [''],
    });
  }

  ngOnInit(): void {
    // Additional initialization if needed
  }

  onSubmit() {
    if (this.logForm.valid) {
      // Collect form data
      const logData = this.logForm.value;

      // Save the data to Firestore
      const logsCollection = collection(this.firestore, 'SystemLogs');
      addDoc(logsCollection, logData)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  }
}
