import {AfterViewInit, Component} from '@angular/core';
import {StatsLoadingComponent} from './stats-loading/stats-loading.component';
export interface Statistic {
  value: number;
  icon:  number | string;
  label: string;
  animatedValue?: number; // Optional property for animated value
}

@Component({
  selector: 'app-start-up',
  standalone: true,
  imports: [
    StatsLoadingComponent
  ],
  templateUrl: './start-up.component.html',
  styleUrl: './start-up.component.css'
})
export class StartUpComponent implements AfterViewInit {
  progress = 0;
  increaseProgress() {
    this.progress += 10;
    if (this.progress > 100) {
      this.progress = 100;
    }
  }

  ngAfterViewInit() {
    setInterval(() => {
      if (this.progress < 100) {
        this.increaseProgress();
      }
    }, 1000);
  }

}
