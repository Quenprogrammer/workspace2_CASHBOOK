import {Component, Input} from '@angular/core';
import {HeadingComponent} from '../../../../core/components/heading/heading.component';
import {IncomeTransactionsComponent} from './income-transactions/income-transactions.component';
import {ExpensesTransactionsComponent} from './expenses-transactions/expenses-transactions.component';
import {NetBalanceComponent} from './net-balance/net-balance.component';
import {ProfitMarginComponent} from './profit-margin/profit-margin.component';

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [
    HeadingComponent,
    IncomeTransactionsComponent,
    ExpensesTransactionsComponent,
    NetBalanceComponent,
    ProfitMarginComponent

  ],
  templateUrl: './others.component.html',
  styleUrl: './others.component.css'
})
export class OthersComponent {
  @Input() public text: string = '';
}
