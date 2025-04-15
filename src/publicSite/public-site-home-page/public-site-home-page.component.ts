import { Component } from '@angular/core';
import {StateWeOperateComponent} from './state-we-operate/state-we-operate.component';

@Component({
  selector: 'app-public-site-home-page',
  standalone: true,
  imports: [
    StateWeOperateComponent
  ],
  templateUrl: './public-site-home-page.component.html',
  styleUrl: './public-site-home-page.component.css'
})
export class PublicSiteHomePageComponent {

}
