import {Component, signal, WritableSignal} from '@angular/core';

import {RouterLink} from '@angular/router';
import {MENU_ITEMS} from "./menuData";
import {NgForOf} from "@angular/common";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    RouterLink,
    NgForOf,


  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoading: WritableSignal<boolean> = signal(true);
    protected readonly items = MENU_ITEMS;
}
