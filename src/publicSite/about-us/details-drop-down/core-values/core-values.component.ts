import {Component} from '@angular/core';

export interface CoreValue {
  title: string;
  description: string;
}

@Component({
  selector: 'app-core-values',
  standalone: true,
  imports: [],
  templateUrl: './core-values.component.html',
  styleUrl: './core-values.component.css'
})
export class CoreValuesComponent {

}
