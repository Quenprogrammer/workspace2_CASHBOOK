import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthKeyService {

  private numberSubject = new BehaviorSubject<number>(this.generateRandomNumber()); // Initial random number
  number$ = this.numberSubject.asObservable(); // Expose as Observable

  constructor() {
    this.startGeneratingNumbers(); // Start the random number generation
  }

  // Generate a random number
  private generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000); // Generates a number between 0 and 999
  }

  // Update the random number every minute
  private startGeneratingNumbers() {
    setInterval(() => {
      const newRandomNumber = this.generateRandomNumber();
      this.numberSubject.next(newRandomNumber); // Store the new number
      console.log('Generated New Random Number:', newRandomNumber);
    }, 60000); // 60000ms = 1 minute
  }

  // Get the latest number without subscribing
  getCurrentNumber(): number {
    return this.numberSubject.value;
  }
}
