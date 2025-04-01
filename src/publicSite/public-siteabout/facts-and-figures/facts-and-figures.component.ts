import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import { Statistic} from '../../../app/features/data/companyInformation';
/*src/app/features/data/companyInformation.ts*/

@Component({
  selector: 'app-facts-and-figures',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './facts-and-figures.component.html',
  styleUrl: './facts-and-figures.component.css'
})
export class FactsAndFiguresComponent implements AfterViewInit {
  @ViewChild('statisticsSection') statisticsSection!: ElementRef;

  statistics: Statistic[] = [
    { strings:'+' , value: 6, label: 'Programs' },
    { value: 1131, label: 'successfully jobs' },
    { value: +40, label: 'Skilled staffs' },
    { value: 12, label: 'State of operation' },
    { value: +20, label: 'Happy clients' },
    { value: 800, label: 'Clients' },
    {strings:'+', value: 5, label: 'years of service' },
    { value: 3, label: 'Standard Cafteria' },


  ];

  private isAnimated: boolean = false; // Flag to check if animation has started

  ngAfterViewInit(): void {
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
    const duration = 8000; // Increased duration to 6000 ms (6 seconds)
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
}
