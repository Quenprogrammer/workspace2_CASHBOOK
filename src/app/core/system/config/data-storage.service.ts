import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private firestore = inject(Firestore);  // Inject Firestore
  private storedDataSubject = new BehaviorSubject<Record<string, any> | null>(null); // Holds the current data
  private retrievedDataSubject = new BehaviorSubject<Record<string, any>>({}); // Holds the localStorage data

  // Getters for Observables
  storedData$ = this.storedDataSubject.asObservable();
  retrievedData$ = this.retrievedDataSubject.asObservable();

  constructor() {
    this.loadFromLocalStorage(); // Initialize data by loading from localStorage
  }

  // Fetch data from Firestore, store it, and then store it in localStorage
  async fetchAndStoreFirestoreData(): Promise<void> {
    try {
      const docRef = doc(this.firestore, 'config', 'appDisplay');
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        const data = snapshot.data();
        // Store data in the BehaviorSubject
        this.storedDataSubject.next(data);

        // Store each field in localStorage
        for (const [key, value] of Object.entries(data)) {
          this.storeInLocalStorage(key, value);
        }

       /* console.log('✅ Document fields stored in localStorage:', data);*/
      } else {
       /* console.warn('⚠️ No document found');*/
      }
    } catch (error) {
    /*  console.error('❌ Error fetching document from Firestore:', error);*/
    }
  }

  // Helper method to store data in localStorage
  private storeInLocalStorage(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
     /* console.error(`❌ Error storing "${key}" in localStorage:`, error);*/
    }
  }

  // Load data from localStorage and update the BehaviorSubject
  private loadFromLocalStorage(): void {
    const keys = Object.keys(localStorage);
    const localData: Record<string, any> = {};

    keys.forEach((key) => {
      try {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
          localData[key] = JSON.parse(storedValue);
        }
      } catch (e) {
        console.warn(`⚠️ Error parsing localStorage value for key "${key}"`, e);
      }
    });

    this.retrievedDataSubject.next(localData);
    console.log('📦 Retrieved from localStorage:', localData);
  }
}
