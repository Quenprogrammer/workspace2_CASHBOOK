import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ToastsContainer} from '../../services/toast/toast-container.component';
import {interval, Subscription} from 'rxjs';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    ToastsContainer,

  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent  {


}
