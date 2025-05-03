import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, getDoc, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewDataDBService {

  constructor(private firestore: Firestore) {}

  // Get all documents from a collection
  getCollectionData(collectionName: string): Observable<any[]> {
    const ref = collection(this.firestore, collectionName);
    return collectionData(ref, { idField: 'id' }); // idField adds document ID
  }

  // Get a single document by ID
  getDocumentById(collectionName: string, docId: string): Observable<any> {
    const ref = doc(this.firestore, `${collectionName}/${docId}`);
    return docData(ref, { idField: 'id' });
  }

  // Fetch once without Observable (if needed)
  async getDataOnce(collectionName: string) {
    const ref = collection(this.firestore, collectionName);
    const snapshot = await getDocs(ref);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  // Fetch single doc once
  async getDocOnce(collectionName: string, docId: string) {
    const ref = doc(this.firestore, `${collectionName}/${docId}`);
    const snapshot = await getDoc(ref);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  }
}
