import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  constructor(private firestore: AngularFirestore) {}

  getPropertiesBackup(): Observable<any[]> {
    return this.firestore.collection('totalCredited').valueChanges({ idField: 'id' });
  }
}
