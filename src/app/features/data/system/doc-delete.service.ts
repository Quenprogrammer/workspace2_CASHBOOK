import {inject, Injectable} from '@angular/core';
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore";
import {Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class DocDeleteService {

  private firestore: Firestore = inject(Firestore); // Inject Firestore instance

  constructor() {}

  // Delete all documents in a given collection
  deleteCollection(collectionName: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        // Get a reference to the collection
        const collectionRef = collection(this.firestore, collectionName);

        // Fetch all documents in the collection
        const querySnapshot = await getDocs(collectionRef);
        if (querySnapshot.empty) {
          console.log('Collection is empty');
          resolve();  // Resolve immediately if no documents found
          return;
        }

        // Iterate through all the documents and delete them
        const deletePromises = querySnapshot.docs.map((docSnapshot) =>
          deleteDoc(doc(this.firestore, collectionName, docSnapshot.id)) // Delete each document by its ID
        );

        // Wait for all delete operations to complete
        await Promise.all(deletePromises);

        console.log(`All documents in collection "${collectionName}" deleted successfully`);
        resolve();  // Resolve the promise when all documents are deleted
      } catch (error) {
        console.error('Error deleting collection:', error);
        reject(error);  // Reject the promise if an error occurs
      }
    });
  }
}
