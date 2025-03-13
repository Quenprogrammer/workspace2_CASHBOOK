import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private firestore: AngularFirestore) {}

  // Method to check if document exists in Firestore
  checkIfDocExists(collectionName: string, docId: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.firestore
        .collection(collectionName)
        .doc(docId)
        .get()
        .subscribe((docSnapshot) => {
          if (docSnapshot.exists) {
            observer.next(true); // Document exists
          } else {
            observer.next(false); // Document does not exist
          }
          observer.complete();
        });
    });
  }
}
