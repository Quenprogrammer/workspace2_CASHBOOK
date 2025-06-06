import {Component, inject} from '@angular/core';
import {collectionData, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {collection} from 'firebase/firestore';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {LoadingComponent} from '../../../core/system/loading/loading.component';
import {RouterLink} from '@angular/router';

interface LogDocument {
  action: string;
  date: string;
  time: string;
  user: string;
}
@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    LoadingComponent,
    RouterLink
  ],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {
  firestore: Firestore = inject(Firestore);
  logs$!: Observable<LogDocument[]>;

  ngOnInit() {
    const logsRef = collection(this.firestore, 'logs');
    this.logs$ = collectionData(logsRef, { idField: 'id' }) as Observable<LogDocument[]>;
  }
}
