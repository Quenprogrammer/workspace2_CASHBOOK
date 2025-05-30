import { Component, OnInit, OnDestroy, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-stand-by',
  standalone: true,
  imports: [],
  templateUrl: './stand-by.component.html',
  styleUrl: './stand-by.component.scss'
})
export class StandByComponent implements OnInit, OnDestroy {
  time: WritableSignal<number> = signal(0);
  isRunning = false;
  private interval: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startTimer(): void {
    if (!this.isRunning) {
      this.interval = setInterval(() => {
        this.time.update(t => t + 1);
      }, 1000);
      this.isRunning = true;
    }
  }

  formattedTime = computed(() => {
    const total = this.time();
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  });

  private pad(num: number): string {
    return num < 10 ? '0' + num : '' + num;
  }
}
