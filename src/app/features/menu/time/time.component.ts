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
  template: `
    <p >{{ currentTime | async }}</p>
  `,

})
export class TimeComponent   {
  currentTime = interval(1000).pipe(
    map(() => new Date().toLocaleTimeString())
  );

  ngOnDestroy(): void {}



}
