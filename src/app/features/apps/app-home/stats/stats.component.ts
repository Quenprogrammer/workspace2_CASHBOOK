import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgForOf} from "@angular/common";
export interface Statistic {
  value: number;
  label: string;
  animatedValue?: number; // Optional property for animated value
}

@Component({
    selector: 'app-stats',
    standalone: true,
  imports: [
    NgForOf
  ],
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss'
})
export class StatsComponent implements AfterViewInit{
  @ViewChild('statisticsSection') statisticsSection!: ElementRef;

  statistics: Statistic[] = [
    { value: +540, label: 'Apps Installed'  },

  ];

  private isAnimated: boolean = false; // Flag to check if animation has started

  ngAfterViewInit(): void { // Lifecycle hook properly used
    this.createObserver();
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
      const increment = Math.ceil(total / (duration / 2)); // Increment value
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
}
