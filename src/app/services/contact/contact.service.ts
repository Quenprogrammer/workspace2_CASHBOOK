import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

// Define a simple contact model
export interface Contact {
  name: string;
  email: string;
  phoneNumbers: string[];
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private firestore: AngularFirestore) { }

  // Method to add a new contact to Firestore
  addContact(contact: Contact): Observable<any> {
    const contactRef = this.firestore.collection('contacts').add(contact);
    return from(contactRef); // Convert the Promise to Observable
  }
}
