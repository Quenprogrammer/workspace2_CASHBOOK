import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {interval} from 'rxjs';
import { AuthGenerateService } from '../../../services/auth/auth-generate.service';
import {AuthStateService} from '../../auth-state.service';

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


    <p class="mb-0 sub"> Interval {{ totalInterval() }}</p>
    <h2  class="mb-0"> {{ randomNumber() }}</h2>
    <h2  class="mb-0">hh {{isValue }}</h2>



  `
})
export class AccessPasswordComponent implements OnInit {
  isValue!:string;

  randomNumber: WritableSignal<number> = signal(0);
  currentInterval: WritableSignal<number> = signal(0);
  totalInterval: WritableSignal<number> = signal(1000);


  constructor(private randomNumberService: AuthGenerateService,public sharedService: AuthStateService) {}

  ngOnInit(): void {

    this.randomNumberService.randomNumber$.subscribe(num => {
      this.randomNumber.set(num)
    });
    this.randomNumberService.currentInterval$.subscribe(interval => {
      this.currentInterval.set(interval) ;
    });
    this.randomNumberService.totalInterval$.subscribe(total => {
      this.totalInterval.set(total) ;
    });
  }




}
