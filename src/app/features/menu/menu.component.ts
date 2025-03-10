import { Component, OnDestroy, OnInit } from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';

import { NetworkService } from '../../services/network.service';

import { AccessPasswordComponent } from './access-password/access-password.component';
import { StandByComponent } from './stand-by/stand-by.component';

import {BalanceComponent} from './balance/balance.component';
import {TotalCreditedComponent} from '../../data/total-credited/total-credited.component';
import {TotalDebitedComponent} from '../../data/total-debited/total-debited.component';
import {headingTextColor} from "../../core/system/config";
import {MenuStatsComponent} from './menu-stats/menu-stats.component';

import {TimeComponent} from './time/time.component';
import {MenuItemsComponent} from './menu-items/menu-items.component';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [

    AccessPasswordComponent,
    StandByComponent,

    NgIf,

    TotalCreditedComponent,
    TotalDebitedComponent,
    MenuStatsComponent,


    MenuItemsComponent,

  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  isOnline: boolean = true;
  currentDate: string;
  currentTime: string = ''; // Initialize as an empty string
  private timer: any;

  constructor(private networkService: NetworkService) {
    const today = new Date();
    this.currentDate = today.toLocaleDateString();
    this.updateTime();
  }

  ngOnInit(): void {
    this.networkService.getOnlineStatus().subscribe(status => {
      this.isOnline = status;
    });
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer); // Clear the timer on component destroy
    }
  }

  // Updates the current time and sets interval
  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString(); // Format as you need

    // Update the time every second
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }


    protected readonly headingTextColor = headingTextColor;
}
