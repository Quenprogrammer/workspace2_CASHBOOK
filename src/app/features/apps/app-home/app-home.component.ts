import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgForOf} from '@angular/common';
import {StatsComponent} from './stats/stats.component';


@Component({
  selector: 'app-app-home',
  standalone: true,
  imports: [
    NgForOf,
    StatsComponent
  ],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.css'
})
export class AppHomeComponent {
  }
