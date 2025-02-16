import {Component, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe} from '@angular/common';
import {interval, map} from 'rxjs';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [
    DatePipe,
    AsyncPipe
  ],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent   {
  currentTime = interval(1000).pipe(
    map(() => new Date().toLocaleTimeString())
  );

  ngOnDestroy(): void {}


}
