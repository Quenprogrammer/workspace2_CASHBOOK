import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-stand-by',
  standalone: true,
  templateUrl: './stand-by.component.html',
  styleUrls: ['./stand-by.component.css']
})
export class StandByComponent implements OnInit {
  counter = 0;
  previousTimestamp: number = Date.now();  // Initialize previousTimestamp to current time

  ngOnInit(): void {
    interval(1000 * 60).subscribe(() => {
      const currentTimestamp = Date.now();
      const intervalTime = currentTimestamp - this.previousTimestamp; // Calculate the interval

      console.log(`Counter: ${this.counter}, Interval: ${intervalTime}ms`);

      this.counter++;
      this.previousTimestamp = currentTimestamp; // Update previousTimestamp
    });
  }

}

