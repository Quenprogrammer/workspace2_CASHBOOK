import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgForOf} from '@angular/common';
export interface Statistic {
  value: number;
  icon:  number | string;
  label: string;
  classStyle: string;
  animatedValue?: number; // Optional property for animated value
}
@Component({
  selector: 'app-stats-loading',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './stats-loading.component.html',
  styleUrl: './stats-loading.component.css'
})
export class StatsLoadingComponent /*implements AfterViewInit*/ {
  progress = 'h';
  @ViewChild('statisticsSection') statisticsSection!: ElementRef;

  statistics: Statistic[] = [
    { value: 6, label: 'People certifies', icon:'bagauda school of fishiries/icons/programs.svg',classStyle:'bi-person fs-1 text-primary' },
    { value: 20, label: 'Courses Uploaded', icon:'bagauda school of fishiries/icons/lab.svg',classStyle:'bi-clock-history fs-1 text-primary' },
    /* { value: +40, label: 'Green House' },*/
    /* { value: 50, label: 'Academic staffs' },
     { value: +19, label: 'Azin Fish pounds' },
     { value: +5, label: 'Concrete Fish ponds' },*/
    { value: +20, label: 'Completed Projects',icon: 'bagauda school of fishiries/icons/nursery.svg' , classStyle:'bi-files-alt fs-1 text-primary'},
    /* { value: +5, label: 'Fish Hatching Lab' },*/
    { value: 800, label: 'Student Enrollment',icon:'bagauda school of fishiries/icons/student.svg', classStyle:'bi-pie-chart fs-1 text-primary' },
    /*    { value: 1, label: 'Campus' },*/
    /*{ value: 3, label: 'Standard Cafteria' } ,*/


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
