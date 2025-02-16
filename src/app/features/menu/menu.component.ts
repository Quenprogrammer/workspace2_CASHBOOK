import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MENU_ITEMS, MenuItem} from "./menuData";
import { NetworkService } from '../../services/network.service';
import {TimeComponent} from './time/time.component';
import {AccessPasswordComponent} from './access-password/access-password.component';
import {StandByComponent} from './stand-by/stand-by.component';
import {AimsTagComponent} from '../../core/system/aims-tag/aims-tag.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    TimeComponent,
    AccessPasswordComponent,
    StandByComponent,
    AimsTagComponent,

  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
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

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();

    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  items: MenuItem[] = MENU_ITEMS; // Ensure the type is correct

}
