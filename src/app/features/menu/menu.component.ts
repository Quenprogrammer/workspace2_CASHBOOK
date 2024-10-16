import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MENU_ITEMS, MenuItem} from "./menuData";
import { NetworkService } from '../../services/network.service';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,

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
