import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-expense-totalncome-ratio',
  standalone: true,
  imports: [],
  templateUrl: './expense-totalncome-ratio.component.html',
  styleUrl: './expense-totalncome-ratio.component.css'
})
export class ExpenseTotalncomeRatioComponent {

  @ViewChild('pieCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  income = 70000;  // Example Income Value
  expenses = 30000; // Example Expenses Value

  ngAfterViewInit() {
    if (this.canvasRef?.nativeElement) {
      this.drawPieChart();
    } else {
      console.error('Canvas element not found!');
    }
  }

  drawPieChart() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ensure the canvas has proper dimensions
    canvas.width = 400;
    canvas.height = 400;

    const total = this.income + this.expenses;
    const incomeAngle = (this.income / total) * 2 * Math.PI;
    const expensesAngle = (this.expenses / total) * 2 * Math.PI;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Income Slice (Golden)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, incomeAngle);
    ctx.closePath();
    ctx.fillStyle = '#A67A3B';
    ctx.fill();

    // Draw Expenses Slice (Red)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, incomeAngle, incomeAngle + expensesAngle);
    ctx.closePath();
    ctx.fillStyle = '#E63946';
    ctx.fill();

    // Add Labels
    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';

    // Label for Income
    const incomeX = centerX + Math.cos(incomeAngle / 2) * (radius / 1.5);
    const incomeY = centerY + Math.sin(incomeAngle / 2) * (radius / 1.5);
    ctx.fillText(`${Math.round((this.income / total) * 100)}% Income`, incomeX, incomeY);

    // Label for Expenses
    const expensesX = centerX + Math.cos(incomeAngle + expensesAngle / 2) * (radius / 1.5);
    const expensesY = centerY + Math.sin(incomeAngle + expensesAngle / 2) * (radius / 1.5);
    ctx.fillText(`${Math.round((this.expenses / total) * 100)}% Expenses`, expensesX, expensesY);
  }
}
