import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
import {TransactionsService} from '../../../services/transactions/transactions.service';
import {DecimalPipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    DecimalPipe,
    NgClass
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

  profitPercentage: number = 0;
  private subscriptions: Subscription = new Subscription();

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {


    this.subscriptions.add(
      this.transactionsService.profitPercentage$.subscribe((percentage) => {
        this.profitPercentage = percentage;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
