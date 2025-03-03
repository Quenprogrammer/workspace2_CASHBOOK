import {Component, signal, WritableSignal} from '@angular/core';

import {RouterLink} from '@angular/router';
import {MENU_ITEMS} from "./menuData";
import {NgForOf} from "@angular/common";
import {StatsComponent} from '../../shared/stats/stats.component';
import {MenuComponent} from '../menu/menu.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    RouterLink,
    NgForOf,
    StatsComponent,
    MenuComponent,


  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoading: WritableSignal<boolean> = signal(true);
    protected readonly items = MENU_ITEMS;
}
