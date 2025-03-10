import { Injectable } from '@angular/core';
import {addDoc, collection, Firestore, Timestamp} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})

export class NotificationService {



  constructor(private firestore: Firestore) {}

  async addUser(user: string, status: string, operation: string) {
    const colRef = collection(this.firestore, 'Notifications'); // Firestore collection name

    const now = new Date();

    // Format the date as "Monday-26 January 2025"
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
      weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
    }).format(now).replace(',', ''); // Removes unnecessary comma

    const userData = {
      user,
      status,
      operation,
      date: formattedDate, // Example: "Monday-26 January 2025"
      time: now.toLocaleTimeString(), // Example: "10:30:15 AM"
      timestamp: Timestamp.now() // Firestore server timestamp
    };

    try {
      await addDoc(colRef, userData);
      console.log('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }
}
