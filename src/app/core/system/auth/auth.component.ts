import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit, OnDestroy {
  randomNumber: number = 0;
  intervalId: any;
  currentInterval: number = 0; // The random number added to the interval
  totalInterval: number = 1000; // Starting interval in ms

  ngOnInit(): void {
    this.startRandomNumberGenerator();
    this.startTimer();
  }

  startRandomNumberGenerator(): void {
    this.clearInterval(); // Clear previous interval before starting a new one

    this.intervalId = setInterval(() => {
      this.randomNumber = Math.floor(Math.random() * (99000000 - 1000000 + 1)) + 10000;

      this.currentInterval = Math.floor(Math.random() * (500 - 100 + 1)) + 1000; // Random increase between 100-500ms
      this.totalInterval += this.currentInterval; // Add current interval to total interval

      this.restartInterval(); // Restart interval with updated time
    }, this.totalInterval);
  }

  restartInterval(): void {
    this.clearInterval();
    this.startRandomNumberGenerator();
  }

  clearInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  // Stop the timer
  stopTimer(): void {
    if (this.timerId) {
      clearInterval(this.timerId);  // Stop the interval
    }
  }

  ngOnDestroy(): void {
    this.clearInterval();
    this.stopTimer();
  }
  seconds: number = 0;  // Timer counter
  timerId: any;         // Store the timer reference

  startTimer(): void {
    this.timerId = setInterval(() => {
      this.seconds++;  // Increment the seconds
    }, 1000); // Update every 1000 milliseconds (1 second)
  }



}
