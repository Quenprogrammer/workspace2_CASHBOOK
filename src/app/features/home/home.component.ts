import { Component } from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {RouterLink} from '@angular/router';
import {MENU_ITEMS} from "./menuData";
import {NgForOf} from "@angular/common";
import {LoadingComponent} from '../../core/system/loading/loading.component';
import {SocialAccountsComponent} from '../social-accounts/social-accounts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    RouterLink,
    NgForOf,
    LoadingComponent,
    SocialAccountsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    protected readonly items = MENU_ITEMS;
}
