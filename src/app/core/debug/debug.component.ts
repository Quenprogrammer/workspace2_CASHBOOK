import { Component } from '@angular/core';
import {AimsTagComponent} from '../system/aims-tag/aims-tag.component';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [
    AimsTagComponent
  ],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.css'
})
export class DebugComponent {

}
