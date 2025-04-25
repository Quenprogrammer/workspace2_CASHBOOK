import {Component, Inject, OnDestroy, OnInit, signal} from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';

import { NetworkService } from '../../services/network.service';

import { AccessPasswordComponent } from './access-password/access-password.component';
import { StandByComponent } from './stand-by/stand-by.component';

import {BalanceComponent} from './balance/balance.component';
import {TotalCreditedComponent} from '../../data/total-credited/total-credited.component';


import {MenuStatsComponent} from './menu-stats/menu-stats.component';

import {TimeComponent} from './time/time.component';
import {MenuItemsComponent} from './menu-items/menu-items.component';
import {TextComponent} from "../../core/components/text/text.component";
import {HeadingComponent} from '../../core/components/heading/heading.component';
import {IntegrationComponent} from './integration/integration.component';
import {WindowsViewComponent} from '../../core/windows-view/windows-view.component';
import {addDoc, collection, doc, Firestore, setDoc} from '@angular/fire/firestore';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLinkBase} from '@ng-bootstrap/ng-bootstrap';
import {LoadingComponent} from '../../core/system/loading/loading.component';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [

    AccessPasswordComponent,
    StandByComponent,

    NgIf,

    TotalCreditedComponent,


    MenuItemsComponent,
    TextComponent,
    HeadingComponent,
    IntegrationComponent,
    WindowsViewComponent,
    NgbNavItem,
    NgbNavLinkBase,
    NgbNavContent,
    NgbNav,
    LoadingComponent,

  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  isLoading = signal<boolean>(false);

  isOnline: boolean = true;
  currentDate: string;
  currentTime: string = ''; // Initialize as an empty string
  private timer: any;

  constructor(private networkService: NetworkService, @Inject(Firestore) private firestore: Firestore) {
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


  addData() {
    const data = {
      name: 'John Doe',
      age: 30,
      occupation: 'Software Developer',
      date: this.currentDate
    };

    // Reference to the "HOMESETTINGS/SetDATA" document
    const setDataDocRef = doc(this.firestore, 'HOMESETTINGS/SetDATA');

    // Set data in the document (this will overwrite any existing data in 'SetDATA')
    setDoc(setDataDocRef, data)
      .then(() => {
        console.log('Data added successfully!');
      })
      .catch((error) => {
        console.error('Error adding data: ', error);
      });
  }





}
