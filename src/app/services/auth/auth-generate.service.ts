import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGenerateService {
  private randomNumberSubject = new BehaviorSubject<number>(0);
  private currentIntervalSubject = new BehaviorSubject<number>(0);
  private totalIntervalSubject = new BehaviorSubject<number>(1000); // Initial interval

  randomNumber$ = this.randomNumberSubject.asObservable();
  currentInterval$ = this.currentIntervalSubject.asObservable();
  totalInterval$ = this.totalIntervalSubject.asObservable();

  private intervalId: any;

  constructor() {
    this.startRandomNumberGenerator();
  }

  private startRandomNumberGenerator(): void {
    this.clearInterval();

    this.intervalId = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * (99000000 - 1000000 + 1)) + 1000000;
      this.randomNumberSubject.next(newRandomNumber);

      const currentInterval = Math.floor(Math.random() * (500 - 100 + 1)) + 100; // Random increase between 100-500ms
      this.currentIntervalSubject.next(currentInterval);

      const newTotalInterval = this.totalIntervalSubject.value + currentInterval;
      this.totalIntervalSubject.next(newTotalInterval);

      this.restartInterval();
    }, this.totalIntervalSubject.value);
  }

  private restartInterval(): void {
    this.clearInterval();
    this.startRandomNumberGenerator();
  }

  private clearInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }
}
