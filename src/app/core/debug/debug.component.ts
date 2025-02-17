import { Component } from '@angular/core';
import {AimsTagComponent} from '../system/aims-tag/aims-tag.component';
import {IDEASTestingComponent} from '../../features/ideas/ideas-testing/ideas-testing.component';
import {ElectronicsComponent} from '../../features/ideas/electronics/electronics.component';
import {HomepageComponent} from '../../features/ideas/homepage/homepage.component';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [
    AimsTagComponent,
    IDEASTestingComponent,
    ElectronicsComponent,
    HomepageComponent
  ],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.css'
})
export class DebugComponent {

}
