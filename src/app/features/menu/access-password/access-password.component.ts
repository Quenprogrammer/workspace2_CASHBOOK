import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import { AuthGenerateService } from '../../../services/auth/auth-generate.service';

@Component({
  selector: 'app-access-password',
  standalone: true,
  imports: [],
  template: `
    <style>
      .sub{
        font-size: 10px;
      }
    </style>
    <h2  class="mb-0"> {{ randomNumber }}</h2>
    <p class="mb-0 sub" > Key {{ currentInterval }}</p>
    <p class="mb-0 sub"> Interval {{ totalInterval }}</p>

  `
})
export class AccessPasswordComponent implements OnInit {
  randomNumber: number = 0;
  currentInterval: number = 0;
  totalInterval: number = 1000;

  constructor(private randomNumberService: AuthGenerateService) {}

  ngOnInit(): void {
    this.randomNumberService.randomNumber$.subscribe(num => {
      this.randomNumber = num;
    });
    this.randomNumberService.currentInterval$.subscribe(interval => {
      this.currentInterval = interval;
    });
    this.randomNumberService.totalInterval$.subscribe(total => {
      this.totalInterval = total;
    });
  }


}
