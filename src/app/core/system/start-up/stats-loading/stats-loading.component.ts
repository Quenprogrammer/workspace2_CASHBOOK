import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgForOf } from '@angular/common';

export interface Statistic {
  value: number;
  icon: string;
  label: string;
  unit: string;
  classStyle: string;
  animatedValue?: number;
  duration?: number; // Unique duration for each stat
  interval?: number; // Unique interval for each stat
}

@Component({
  selector: 'app-stats-loading',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './stats-loading.component.html',
  styleUrls: ['./stats-loading.component.css']
})
export class StatsLoadingComponent implements AfterViewInit {
  @ViewChild('statisticsSection') statisticsSection!: ElementRef;
  progress = 'h';

  statistics: Statistic[] = [
    { value: 20000 , unit: 'MB', label: 'Records', icon: 'assets/icons/programs.svg', classStyle: 'bi-person fs-1 text-primary', duration: 10000, interval: 100 },
    { value: 200000, unit: ' MB', label: 'Storage', icon: 'assets/icons/lab.svg', classStyle: 'bi-clock-history fs-1 text-primary', duration: 4000, interval: 20 },
    { value: 650, unit: ' ms', label: 'Speed', icon: 'assets/icons/nursery.svg', classStyle: 'bi-files-alt fs-1 text-primary', duration: 3000, interval: 15 },
    { value: 800, unit: 'MB', label: 'CRUD Operations', icon: 'assets/icons/student.svg', classStyle: 'bi-pie-chart fs-1 text-primary', duration: 3500, interval: 12 }
  ];

  private isAnimated: boolean = false;

  ngAfterViewInit(): void {
    this.createObserver();
  }

  private createObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isAnimated) {
          this.animateStatistics();
          this.isAnimated = true;
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.statisticsSection.nativeElement);
  }

  private animateStatistics(): void {
    this.statistics.forEach(stat => {
      stat.animatedValue = 0;
      const total = stat.value;
      const duration = stat.duration ?? 5000; // Default to 5000ms if not set
      const intervalTime = stat.interval ?? 10; // Default to 10ms if not set

      const steps = duration / intervalTime;
      const increment = Math.ceil(total / steps);
      let current = 0;

      const interval = setInterval(() => {
        if (current < total) {
          current += increment;
          if (current > total) {
            current = total;
          }
          stat.animatedValue = current;
        } else {
          clearInterval(interval);
        }
      }, intervalTime);
    });
  }
}
