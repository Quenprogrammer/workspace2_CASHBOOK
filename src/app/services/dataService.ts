import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, updateDoc, deleteDoc, getDocs, collectionData } from '@angular/fire/firestore';
import { CollectionReference, DocumentData } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private firestore: Firestore) {}

  getCollectionRef(path: string): CollectionReference<DocumentData> {
    return collection(this.firestore, path);
  }

  addData(path: string, data: any) {
    const colRef = this.getCollectionRef(path);
    return addDoc(colRef, data);
  }

  updateData(path: string, docId: string, data: any) {
    const docRef = doc(this.firestore, path, docId);
    return updateDoc(docRef, data);
  }

  deleteData(path: string, docId: string) {
    const docRef = doc(this.firestore, path, docId);
    return deleteDoc(docRef);
  }

  getData(path: string) {
    const colRef = this.getCollectionRef(path);
    return collectionData(colRef, { idField: 'id' }); // optional: include document ID
  }
}
