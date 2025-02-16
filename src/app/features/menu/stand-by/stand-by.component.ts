import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-stand-by',
  standalone: true,
  imports: [],
  templateUrl: './stand-by.component.html',
  styleUrl: './stand-by.component.css'
})
export class StandByComponent implements OnInit {
  counter = 0;

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.counter++;
    });
  }

}
