import { Component, inject, OnInit } from '@angular/core';

import { AsyncPipe, CurrencyPipe } from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {TransactionsService} from '../../services/transactions/transactions.service';
import {FirebaseDocument} from '../../services/Cumulative/totals.service';
import {IncomeComponent} from './income/income.component';
import {ExpensisComponent} from './expensis/expensis.component';
import {BalanceComponent} from './balance/balance.component';
import {StatsComponent} from './stats/stats.component';
import {ServerComponent} from './server/server.component';
import {WindowsViewComponent} from '../../core/windows-view/windows-view.component';
import {MobileViewComponent} from '../../core/windows-view/mobile-view/mobile-view.component';
import {companyName} from '../data/companyInformation';
import {LatestTransactionsComponent} from './latest-transactions/latest-transactions.component';
import {LatestNotificationsComponent} from './latest-notifications/latest-notifications.component';
import {LogsComponent} from './logs/logs.component';
import {AccountsComponent} from './accounts/accounts.component';
import {IncomeVsExpensisComponent} from './income-vs-expensis/income-vs-expensis.component';


interface MessageInquiries {
  id?: string;
  date: string;
  referenceNumber: string;
  description: string;
  account: string;
  amount: number;
  payee: string;
  paymentMode: string;
  type: string; // This will be 'credit' or 'debit'
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    IncomeComponent,
    ExpensisComponent,
    BalanceComponent,
    StatsComponent,
    ServerComponent,
    WindowsViewComponent,
    MobileViewComponent,
    LatestTransactionsComponent,
    LatestNotificationsComponent,
    LogsComponent,
    AccountsComponent,
    IncomeVsExpensisComponent,


  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] // Fixed typo: styleUrl should be styleUrls
})
export class DashboardComponent /*implements OnInit*/ {
  progress1 = 33;  // Value for the first progress bar
  progress2 = 25;  // Value for the second progress bar

  // Opacity for the second progress bar
  opacity2 = 0.6;  // Opacity of the second progress bar


  ngAfterViewInit() {
    this.drawChart();
  }

  drawChart(): void {
    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    // Make it responsive: set internal resolution based on rendered size
    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const data = [0, 100, 200, 175, 100, 50, 75, 0, 0, 50, 50, 50, 0, 100, 0];
    const labels = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15'];

    const maxWidth = canvas.width;
    const maxHeight = canvas.height;
    const padding = 50;
    const graphWidth = maxWidth - padding * 2;
    const graphHeight = maxHeight - padding * 2;
    const maxData = Math.max(...data);

    ctx.clearRect(0, 0, maxWidth, maxHeight);

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(133,140,151,.18)';
    ctx.lineWidth = 2;
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, maxHeight - padding);
    ctx.moveTo(padding, maxHeight - padding);
    ctx.lineTo(maxWidth - padding, maxHeight - padding);
    ctx.stroke();

    ctx.fillStyle = 'black';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'right';

    for (let i = 0; i <= maxData; i += 50) {
      const y = maxHeight - padding - (i / maxData) * graphHeight;
      ctx.fillText(i.toString(), padding - 10, y + 5);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(133,140,151,.18)';
      ctx.moveTo(padding, y);
      ctx.lineTo(maxWidth - padding, y);
      ctx.stroke();
    }

    ctx.textAlign = 'center';
    labels.forEach((label, index) => {
      const x = padding + (index / (labels.length - 1)) * graphWidth;
      ctx.fillText(label, x, maxHeight - 30);
    });

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(166,122,59)';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'rgba(166,122,59,.1)';

    data.forEach((value, index) => {
      const x = padding + (index / (data.length - 1)) * graphWidth;
      const y = maxHeight - padding - (value / maxData) * graphHeight;

      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.stroke();

    ctx.lineTo(maxWidth - padding, maxHeight - padding);
    ctx.lineTo(padding, maxHeight - padding);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#A67A3B';
    data.forEach((value, index) => {
      const x = padding + (index / (data.length - 1)) * graphWidth;
      const y = maxHeight - padding - (value / maxData) * graphHeight;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }


  protected readonly companyName = companyName;
}
