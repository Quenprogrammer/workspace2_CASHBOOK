import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AuthGenerateService } from '../../../services/auth/auth-generate.service';
@Component({
  selector: 'app-stand-by',
  standalone: true,
  template: `
    <h2 class="mb-0"> {{ randomNumber }}</h2>

  `,

})
export class StandByComponent implements OnInit {
  randomNumber: number = 0;

  constructor(private randomNumberService: AuthGenerateService) {}

  ngOnInit(): void {
    this.randomNumberService.randomNumber$.subscribe(num => {
      this.randomNumber = num;
    });
  }
}

