import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {LayoutComponent} from "./core/layout/layout.component";
import {interval, Subscription} from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  template:`<app-layout></app-layout>`,

})
export class AppComponent {
  title = 'bagaudaschool';
  time: number = 0;           // To store the time in seconds
  timerSubscription: Subscription | undefined; // To hold the subscription reference

  ngOnInit(): void {
    // Start the timer when the component is initialized
    this.timerSubscription = interval(1000).subscribe(() => {
      this.time++;  // Increment the time by 1 every second
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to stop the timer when the component is destroyed
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
