import { Injectable } from '@angular/core';
import {
  collection,
  collectionChanges,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore
} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {CollectionReference} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ViewDataDBService {

  constructor(private firestore: Firestore) {}

  // 🔁 Reusable method to get any collection
  getCollection<T>(collectionName: string): Observable<T[]> {
    const colRef = collection(this.firestore, collectionName) as CollectionReference<T>;
    return collectionData(colRef, { idField: 'id' });
  }

  // 📄 Optional: get a single doc by ID
  getDocument<T>(collectionName: string, docId: string): Observable<T> {
    const docRef = doc(this.firestore, `${collectionName}/${docId}`);
    return docData(docRef, { idField: 'id' }) as Observable<T>;
  }
  getCollectionWithIds<T>(collectionPath: string): Observable<(T & { id: string })[]> {
    const colRef = collection(this.firestore, collectionPath) as CollectionReference<T>;
    return collectionData(colRef, { idField: 'id' }) as Observable<(T & { id: string })[]>;
  }

  deleteDocument(collectionPath: string, docId: string): Promise<void> {
    const docRef = doc(this.firestore, `${collectionPath}/${docId}`);
    return deleteDoc(docRef);
  }

}
