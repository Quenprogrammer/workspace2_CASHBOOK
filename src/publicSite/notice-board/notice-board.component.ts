import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-notice-board',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.css'
})
export class NoticeBoardComponent {
  events = [
    {
      title: '2024/2025 POSTGRADUATE ADMISSION LIST (BATCH 2) FROM B',
      day: 21,
      monthYear: 'October 2024'
    },
    {
      title: '2024/2025 POSTGRADUATE ADMISSION LIST (BATCH 2) FROM B',
      day: 21,
      monthYear: 'October 2024'
    },
    {
      title: '2024/2025 POSTGRADUATE ADMISSION LIST (BATCH 2) FROM B',
      day: 21,
      monthYear: 'October 2024'
    },
    // Add more entries if needed
  ];
}
