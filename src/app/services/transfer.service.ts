import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, getDoc, updateDoc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  constructor(private firestore: Firestore) {}

  // Common function to handle adding transfers and updating count
  private async addTransferAndUpdateCount(
    collectionName: string,
    countDocPath: string,
    data: any
  ): Promise<void> {
    try {
      // Step 1: Add Data to Specified Collection
      const transferCollection = collection(this.firestore, collectionName);
      await addDoc(transferCollection, data);
      console.log(`New transfer added to ${collectionName}.`);

      // Step 2: Update NoOfTransfer in Specified Count Document
      const countDocRef = doc(this.firestore, countDocPath);
      const countDocSnapshot = await getDoc(countDocRef);

      if (countDocSnapshot.exists()) {
        const currentCount = countDocSnapshot.data()?.['NoOfTransfer'] || 0;
        await updateDoc(countDocRef, { NoOfTransfer: currentCount + 1 });
      } else {
        await setDoc(countDocRef, { NoOfTransfer: 1 });
      }

      console.log(`NoOfTransfer updated successfully in ${countDocPath}.`);
    } catch (error) {
      console.error(`Error in ${collectionName}:`, error);
    }
  }

  // Method for adding a transfer by login
  async addByLogin(data: any): Promise<void> {
    return this.addTransferAndUpdateCount('transfer_by_login', 'transfer_by_login/count', data);
  }

  // Method for adding a transfer by token
  async addByToken(data: any): Promise<void> {
    return this.addTransferAndUpdateCount('transfer_by_token', 'transfer_by_token/count', data);
  }
}
