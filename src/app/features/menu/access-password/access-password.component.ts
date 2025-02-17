import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-access-password',
  standalone: true,
  imports: [],
  templateUrl: './access-password.component.html',
  styleUrl: './access-password.component.css'
})
export class AccessPasswordComponent implements OnInit {
  randomNumber: number=100000000;

  ngOnInit(): void {
    interval(50).subscribe(() => {
      this.randomNumber = Math.floor(Math.random() * 100000000);

    });
  }

}
