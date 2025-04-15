import { Component } from '@angular/core';
import {FirestoreService} from '../../../services/firestore/firestore.service';
import {ActivityService} from '../activity.service';


@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  constructor(private activityService: ActivityService) {} // Change FirestoreService to ActivityService

  ngOnInit() {
    this.addUser();
    this.getUsers();
  }

  addUser() {
    const userData = {
      name: 'John Doe',
      age: 30,
      occupation: 'Software Developer',
      date: new Date().toISOString()
    };

    this.activityService.addData('users', userData).then((id) => { // Change firestoreService to activityService
      console.log('User added with ID:', id);
    });
  }

  getUsers() {
    this.activityService.getCollectionData('users').subscribe((data) => { // Change firestoreService to activityService
      console.log('Users:', data);
    });
  }

  updateUser(userId: string) {
    const newData = { age: 31 };
    this.activityService.updateData('users', userId, newData); // Change firestoreService to activityService
  }

  deleteUser(userId: string) {
    this.activityService.deleteData('users', userId); // Change firestoreService to activityService
  }
}
