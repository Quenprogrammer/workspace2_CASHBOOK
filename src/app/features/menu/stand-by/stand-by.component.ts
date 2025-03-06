import {Component, OnInit, signal} from '@angular/core';
import { interval } from 'rxjs';
import { AuthGenerateService } from '../../../services/auth/auth-generate.service';
@Component({
  selector: 'app-stand-by',
  standalone: true,
  template: `
    <h2 class="mb-0"> {{ seconds() }}s</h2>
 <!-- timer.component.html -->


  `,

})
export class StandByComponent  {
  seconds = signal(0);

  // Store a reference to the timer interval
  private timerInterval:any =1

  constructor() {}

  // Start the timer
  startTimer(): void {
    // Stop any existing timer
    this.stopTimer();

    // Set the interval to update the seconds every 1000ms (1 second)
    this.timerInterval = setInterval(() => {
      this.seconds.update(value => value + 1);  // Increment the time
    }, 1000);

  }

  // Stop the timer
  stopTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval); // Clear the timer interval
    }
  }

  // Reset the timer
  resetTimer(): void {
    this.stopTimer();
    this.seconds.set(0); // Reset the seconds to 0
    this.startTimer(); // Restart the timer
  }
}

