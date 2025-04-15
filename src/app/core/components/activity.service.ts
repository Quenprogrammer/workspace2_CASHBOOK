import { Inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(@Inject(Firestore) private firestore: Firestore) {}

  async addData(collectionName: string, data: any): Promise<string | null> {
    try {
      const docRef = await addDoc(collection(this.firestore, collectionName), data);
      return docRef.id;
    } catch (error) {
      console.error(`Error adding document to ${collectionName}:`, error);
      return null;
    }
  }

  getCollectionData(collectionName: string): Observable<any[]> {
    try {
      return collectionData(collection(this.firestore, collectionName), { idField: 'id' });
    } catch (error) {
      console.error(`Error fetching data from ${collectionName}:`, error);
      return new Observable<any[]>(); // Return an empty observable to prevent errors in UI
    }
  }

  async updateData(collectionName: string, docId: string, newData: any): Promise<boolean> {
    try {
      const documentRef = doc(this.firestore, `${collectionName}/${docId}`);
      await updateDoc(documentRef, newData);
      return true;
    } catch (error) {
      console.error(`Error updating document ${docId} in ${collectionName}:`, error);
      return false;
    }
  }

  async deleteData(collectionName: string, docId: string): Promise<boolean> {
    try {
      const documentRef = doc(this.firestore, `${collectionName}/${docId}`);
      await deleteDoc(documentRef);
      return true;
    } catch (error) {
      console.error(`Error deleting document ${docId} from ${collectionName}:`, error);
      return false;
    }
  }
}
