import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Statistic} from '../../ideas/homepage/homepage.component';
import {CurrencyPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe
  ],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent implements AfterViewInit{
  stats:number=0;
  credit:number=1000000;
  debit:number=200000;

  @ViewChild('statisticsSection') statisticsSection!: ElementRef;

  statistics: Statistic[] = [

    { value: +2000000, label: 'Credit' },
    { value: +4000000, label: 'Debit' },

  ];

  private isAnimated: boolean = false; // Flag to check if animation has started

  ngAfterViewInit(): void { // Lifecycle hook properly used
    this.createObserver();
    this.calculateStats()
  }

  private createObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isAnimated) {
          this.animateStatistics(); // Start the animation
          this.isAnimated = true; // Set the flag to true to avoid re-triggering
          observer.unobserve(entry.target); // Stop observing once the animation starts
        }
      });
    });

    observer.observe(this.statisticsSection.nativeElement); // Observe the section
  }

  private animateStatistics(): void {
    const duration = 8000; // Total duration: 8000 ms (8 seconds)
    this.statistics.forEach(stat => {
      stat.animatedValue = 0; // Initialize animatedValue to 0
      const total = stat.value;
      const increment = Math.ceil(total / (duration / 100)); // Increment value
      let current = 0;

      const interval = setInterval(() => {
        if (current < total) {
          current += increment; // Increase current value
          if (current > total) {
            current = total; // Ensure it does not exceed the total
          }
          stat.animatedValue = current; // Update animatedValue
        } else {
          clearInterval(interval); // Clear interval when done
        }
      }, 100); // Update every 100 milliseconds
    });
  }


  calculateStats(){

    this.stats=(this.credit / this.debit) * 100
  }

}
