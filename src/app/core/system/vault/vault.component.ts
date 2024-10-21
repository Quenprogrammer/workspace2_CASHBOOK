import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import { MENU_ITEMS } from './vaultMenu';


@Component({
  selector: 'app-vault',
  standalone: true,
  imports: [

    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './vault.component.html',
  styleUrl: './vault.component.css'
})
export class VaultComponent {

  protected readonly items = MENU_ITEMS;
}
