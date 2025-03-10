import {Component, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe} from '@angular/common';
import {interval, map} from 'rxjs';
import {headingTextColor} from '../../../core/system/config';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [
    DatePipe,
    AsyncPipe
  ],
  template: `
    <p [style.color]="headingTextColor">Current Time: {{ currentTime | async }}</p>
  `,

})
export class TimeComponent   {
  currentTime = interval(1000).pipe(
    map(() => new Date().toLocaleTimeString())
  );

  ngOnDestroy(): void {}


  protected readonly headingTextColor = headingTextColor;
}
