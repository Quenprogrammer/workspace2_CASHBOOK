import { Component } from '@angular/core';

import {FactsAndFiguresComponent} from '../../home/facts-and-figures/facts-and-figures.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    FactsAndFiguresComponent,
    FactsAndFiguresComponent
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

}
