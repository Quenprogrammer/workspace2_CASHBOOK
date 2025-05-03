import { AfterViewInit, Component, ElementRef, ViewChild, computed, inject, signal } from '@angular/core';
import { TransactionsService } from '../../../services/transactions/transactions.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

interface FirebaseDocument {
  totalAmount?: number;
}

@Component({
  selector: 'app-income-vs-expensis',
  standalone: true,
  templateUrl: './income-vs-expensis.component.html',
  imports: [CurrencyPipe, DecimalPipe],
  styleUrls: ['./income-vs-expensis.component.css']
})
export class IncomeVsExpensisComponent implements AfterViewInit {

  @ViewChild('pieCanvas', { static: true }) pieCanvas!: ElementRef<HTMLCanvasElement>;

  // Signals for expense and income percentages
  expensePercentage = signal(0); // Initialize with a default value
  incomePercentage = signal(0); // Initialize with a default value

  private transactionService = inject(TransactionsService);

  private debits = toSignal(this.transactionService.totalDebits$, { initialValue: [] as FirebaseDocument[] });
  private credits = toSignal(this.transactionService.totalCredits$, { initialValue: [] as FirebaseDocument[] });

  totalIncome = computed(() =>
    this.credits().reduce((sum, item) => sum + (item.totalAmount || 0), 0)
  );

  totalExpense = computed(() =>
    this.debits().reduce((sum, item) => sum + (item.totalAmount || 0), 0)
  );

  balance = computed(() => this.totalIncome() - this.totalExpense());

  @ViewChild('expensesCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  // Pie chart data
  data = [40, 60]; // Example: 40% expenses, 60% income
  colors = ['#ff6384', '#36a2eb'];
  labels = ['Expenses', 'Income'];

  ngAfterViewInit(): void {
    this.calculatePercentages();
    this.drawPieChart();
  }

  calculatePercentages(): void {
    const income = this.totalIncome();
    const expenses = this.totalExpense();

    // Calculate and update the expense percentage
    const expensePct = income === 0 ? 0 : (expenses / income) * 100;
    this.expensePercentage.set(expensePct);

    // Calculate and update the income percentage
    const total = income + expenses;
    const incomePct = total === 0 ? 0 : (income / total) * 100;
    this.incomePercentage.set(incomePct);
  }

  drawPieChart(): void {
    const canvas = this.pieCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const total = this.data.reduce((sum, value) => sum + value, 0);
    const centerX = 200;
    const centerY = 200;
    const radius = 150;
    let currentAngle = -0.4 * Math.PI;

    for (let i = 0; i < this.data.length; i++) {
      const sliceAngle = (this.data[i] / total) * 2 * Math.PI;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();

      ctx.fillStyle = this.colors[i];
      ctx.fill();

      currentAngle += sliceAngle;
    }
  }
}
