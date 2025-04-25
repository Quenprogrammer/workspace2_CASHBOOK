import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent {
  @ViewChild('expensesCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    if (this.canvasRef) {
      this.drawBarChart();
    } else {
      console.error('Canvas element not found!');
    }
  }

  // Make the chart responsive
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.drawBarChart();  // Redraw the chart on resize
  }

  drawBarChart() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) {
      console.error('Canvas is not initialized.');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize the canvas to fit the container width
    canvas.width = window.innerWidth * 0.6;  // Example: Set canvas width to 80% of the window width
    canvas.height = window.innerHeight * 1.3;  // Adjust height to 40% of the window height (responsive height)

    // Chart Configurations
    const data = [8, 100, 200];
    const labels = ['D1', ' ', 'D3'];
    const padding = 50;
    const maxWidth = canvas.width;
    const maxHeight = canvas.height;
    const graphWidth = maxWidth - padding * 2;
    const graphHeight = maxHeight - padding * 2;
    const maxData = Math.max(...data);
    const barWidth = graphWidth / data.length - 5; // Bar width with spacing

    ctx.clearRect(0, 0, maxWidth, maxHeight);

    // Draw X and Y Axes
    ctx.strokeStyle = 'rgba(133,140,151,.18)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, maxHeight - padding);
    ctx.moveTo(padding, maxHeight - padding);
    ctx.lineTo(maxWidth - padding, maxHeight - padding);
    ctx.stroke();

    // Grid Lines & Y-Axis Labels
    ctx.fillStyle = 'black';
    ctx.font = '28px Inter, sans-serif';
    ctx.textAlign = 'right';

    for (let i = 0; i <= maxData; i += 50) {
      const y = maxHeight - padding - (i / maxData) * graphHeight;
      ctx.fillText(i.toString(), padding - 10, y + 5);
      ctx.strokeStyle = 'rgba(133,140,151,.18)';
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(maxWidth - padding, y);
      ctx.stroke();
    }

    // X-axis Labels
    ctx.textAlign = 'center';
    labels.forEach((label, index) => {
      const x = padding + index * (graphWidth / labels.length) + barWidth / 2;
      ctx.fillText(label, x, maxHeight - 30);
    });

    // Draw Bar Chart
    ctx.fillStyle = '#A67A3B';
    data.forEach((value, index) => {
      const x = padding + index * (graphWidth / data.length);
      const barHeight = (value / maxData) * graphHeight;
      const y = maxHeight - padding - barHeight;

      ctx.fillRect(x, y, barWidth, barHeight);
    });
  }

}
