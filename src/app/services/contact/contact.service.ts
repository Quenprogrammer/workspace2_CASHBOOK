import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  // Initialize a BehaviorSubject with an empty array of contacts
  private contactsSubject = new BehaviorSubject<Contact[]>([]);
  contacts$ = this.contactsSubject.asObservable();

  constructor() {}

  // Add a new contact
  addContact(contact: Contact) {
    const currentContacts = this.contactsSubject.value;
    currentContacts.push(contact);
    this.contactsSubject.next(currentContacts);  // Update the contacts list
  }

  // Get all contacts (this will be used to display contacts later if needed)
  getContacts() {
    return this.contactsSubject.asObservable();
  }
}
