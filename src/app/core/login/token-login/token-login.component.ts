import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { signal } from '@angular/core'; // Import signal

@Component({
  selector: 'app-token-login',
  standalone: true,
  imports: [NgIf],
  templateUrl: './token-login.component.html',
  styleUrls: ['./token-login.component.css'],
})
export class TokenLoginComponent implements OnInit, OnDestroy {
  // Replace normal properties with signals
  randomNumber = signal(0); // Signal for random number
  k = signal(0); // Signal for the result of the equation

  private intervalId: any;
  private timeoutId: any;

  y: number = 4; // Given value of y
  x: number = 5; // Given value of x

  ngOnInit(): void {
    this.startAutoGenerate();
    this.calculateK();
  }

  ngOnDestroy(): void {
    // Clear timers if the component is destroyed early
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
  }

  generateRandomNumber(): void {
    this.randomNumber.set(this.getRandomBetween(10000, 99999)); // Set new value to signal
  }

  getRandomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  startAutoGenerate(): void {
    this.generateRandomNumber(); // initial number

    this.intervalId = setInterval(() => {
      this.generateRandomNumber();
    }, 10); // every 1 second

    this.timeoutId = setTimeout(() => {
      clearInterval(this.intervalId); // stop after 15 seconds
    }, 15000);
  }

  calculateK(): void {
    // Calculate k using signals
    this.k.set(this.y + 2 * this.x + this.randomNumber()); // k = y + 2x + randomNumber
  }
}
