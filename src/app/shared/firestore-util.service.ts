// firestore-util.service.ts
import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, DocumentReference, DocumentData } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class FirestoreUtilService {
  constructor(private firestore: Firestore) {}

  async documentExists(path: string): Promise<boolean> {
    try {
      const docRef: DocumentReference<DocumentData> = doc(this.firestore, path);
      const docSnap = await getDoc(docRef);
      return docSnap.exists();
    } catch (error) {
      console.error('Error checking document existence:', error);
      return false;
    }
  }
}
