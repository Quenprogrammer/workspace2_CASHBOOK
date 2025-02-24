
import { Component, OnInit, Input } from '@angular/core';
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-view-data',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './view-data.component.html',
  styleUrl: './view-data.component.scss'
})
export class ViewDataComponent implements OnInit {
  @Input() formData: any;  // Receive form data as input

  constructor() { }

  ngOnInit(): void {}
}
