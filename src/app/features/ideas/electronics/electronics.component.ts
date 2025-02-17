import { Component } from '@angular/core';
import {electronics} from './electronics';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {

  protected readonly electronics = electronics;
}
