import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import { interval } from 'rxjs';
import { AuthGenerateService } from '../../../services/auth/auth-generate.service';
import {headingTextColor} from '../../../core/system/config';
@Component({
  selector: 'app-stand-by',
  standalone: true,
  template: `
    <h2 [style.color]="headingTextColor" class="mb-0"> {{ seconds }}s</h2>
 <!-- timer.component.html -->


  `,

})
export class StandByComponent implements OnInit, OnDestroy {
  // Stop the timer
  stopTimer(): void {
    if (this.timerId) {
      clearInterval(this.timerId);  // Stop the interval
    }
  }
  ngOnInit(): void {
 this.startTimer()
  }

  ngOnDestroy(): void {

    this.stopTimer();
  }
  seconds: number = 0;  // Timer counter
  timerId: any;         // Store the timer reference

  startTimer(): void {
    this.timerId = setInterval(() => {
      this.seconds++;  // Increment the seconds
    }, 1000); // Update every 1000 milliseconds (1 second)
  }


  protected readonly headingTextColor = headingTextColor;
}

