import {Inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(@Inject(Firestore) private firestore: Firestore) {}

  async addData(collectionName: string, data: any): Promise<string> {
    const docRef = await addDoc(collection(this.firestore, collectionName), data);
    return docRef.id;
  }

  getCollectionData(collectionName: string): Observable<any[]> {
    return collectionData(collection(this.firestore, collectionName), { idField: 'id' });
  }

  async updateData(collectionName: string, docId: string, newData: any): Promise<void> {
    await updateDoc(doc(this.firestore, `${collectionName}/${docId}`), newData);
  }

  async deleteData(collectionName: string, docId: string): Promise<void> {
    await deleteDoc(doc(this.firestore, `${collectionName}/${docId}`));
  }
}
