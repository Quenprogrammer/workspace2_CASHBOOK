import {Component, Inject, signal} from '@angular/core';
import {NetworkService} from '../../../services/network.service';

import {NgIf} from '@angular/common';

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './network.component.html',
  styleUrl: './network.component.css'
})
export class NetworkComponent {

  isOnline: boolean = true;

  private timer: any;

  constructor(private networkService: NetworkService) {

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



}
