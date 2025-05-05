import {Component, inject, OnInit, signal} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {LoadingComponent} from '../loading/loading.component';
import {deleteDoc, doc, getDocs} from 'firebase/firestore';
interface LogDocument {
  action: string;
  date: string;
  time: string;
  user: string;
  device: string;
  id?: string;
}
@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    LoadingComponent,
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent implements OnInit{
  totalDocs = signal(0); // Total number of documents
  deletedDocs = signal(0); // Number of deleted documents
  deletingInProgress = signal(false); // Is deletion in progress?

  firestore: Firestore = inject(Firestore);
  logs$!: Observable<LogDocument[]>;

  ngOnInit() {
    const logsRef = collection(this.firestore, 'logs');
    this.fetchLogs();
    this.logs$ = collectionData(logsRef, { idField: 'id' }) as Observable<LogDocument[]>;
  }

  deleteLog(id?: string): void {
    if (!id) {
      console.error('Missing ID for deletion');
      return;
    }

    const logDocRef = doc(this.firestore, `logs/${id}`);
    deleteDoc(logDocRef)
      .then(() => console.log('Log deleted:', id))
      .catch(error => console.error('Error deleting log:', error));
  }


  // Function to delete all documents in the 'logs' collection
  async deleteAllLogs(): Promise<void> {
    this.deletingInProgress.set(true);  // Set deletion in progress to true
    const logsRef = collection(this.firestore, 'logs');
    const logsSnapshot = await getDocs(logsRef);
    const totalDocuments = logsSnapshot.docs.length;

    this.totalDocs.set(totalDocuments); // Set total number of documents
    this.deletedDocs.set(0);  // Reset the deleted count to 0

    const deletePromises = logsSnapshot.docs.map((docSnapshot) => {
      return deleteDoc(doc(this.firestore, 'logs', docSnapshot.id))
        .then(() => {
          this.deletedDocs.update(current => current + 1); // Increment deleted docs count
          this.updateProgress();  // Update progress
        })
        .catch(error => {
          console.error('Error deleting document: ', error);
        });
    });

    try {
      await Promise.all(deletePromises);
      console.log('All documents deleted successfully.');
    } catch (error) {
      console.error('Error deleting documents: ', error);
    } finally {
      this.deletingInProgress.set(false); // Set deletion to completed
    }
  }

  // Function to update the progress (console log)
  updateProgress(): void {
    console.log(`Deleted ${this.deletedDocs()} of ${this.totalDocs()}`);
  }


  // Signals for reactive state
  filteredLogs = signal<LogDocument[]>([]); // Holds filtered logs based on search
  searchQuery = signal<string>(''); // Holds the current search query

  fetchLogs() {
    const logsRef = collection(this.firestore, 'logs');
    this.logs$ = collectionData(logsRef, { idField: 'id' }) as Observable<LogDocument[]>;

    // Subscribe to the logs and set them to filteredLogs signal
    this.logs$.subscribe(logs => {
      this.filteredLogs.set(logs);  // Set the logs to the signal
    });
  }

  // Auto-filter logs based on search query
  filterLogs(): void {
    const query = this.searchQuery();  // Get the search query
    if (!query) {
      this.fetchLogs();  // If no query, fetch all logs
    } else {
      // Filter logs based on the query across multiple fields
      this.filteredLogs.set(this.filteredLogs().filter(log =>
        log.action.toLowerCase().includes(query.toLowerCase()) ||
        log.user.toLowerCase().includes(query.toLowerCase()) ||
        log.date.toLowerCase().includes(query.toLowerCase()) ||
        log.time.toLowerCase().includes(query.toLowerCase())
      ));
    }
  }
}
