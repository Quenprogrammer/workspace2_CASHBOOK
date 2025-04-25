import {Component} from '@angular/core';
import {HeadingComponent} from '../../../../../core/components/heading/heading.component';

@Component({
  selector: 'app-profit-margin',
  standalone: true,
  imports: [
    HeadingComponent
  ],
  templateUrl: './profit-margin.component.html',
  styleUrl: './profit-margin.component.css'
})
export class ProfitMarginComponent {
  ngAfterViewInit() {
    this.drawChart();
  }

  drawChart() {
    const canvas = document.getElementById('profitMargin') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const data = [0, 100, 200, 175, 100, 50, 75, 0, 0, 50, 50, 50, 0 ];
    const labels = ['D1', ' ', 'D3', 'D15'];
    const maxWidth = canvas.width;
    const maxHeight = canvas.height;
    const padding = 50;
    const graphWidth = maxWidth - padding * 2;
    const graphHeight = maxHeight - padding * 2;
    const maxData = Math.max(...data);

    ctx.clearRect(0, 0, maxWidth, maxHeight);

    // Draw X and Y Axes
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(133,140,151,.18)';
    ctx.lineWidth = 2;

    // Y-Axis
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, maxHeight - padding);

    // X-Axis
    ctx.moveTo(padding, maxHeight - padding);
    ctx.lineTo(maxWidth - padding, maxHeight - padding);
    ctx.stroke();

    // Grid Lines & Y-Axis Labels
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

    // X-axis Labels
    ctx.textAlign = 'center';
    labels.forEach((label, index) => {
      const x = padding + (index / (labels.length - 1)) * graphWidth;
      ctx.fillText(label, x, maxHeight - 30);
    });

    // Draw Line Chart
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

    // Fill Area Below Line
    ctx.lineTo(maxWidth - padding, maxHeight - padding);
    ctx.lineTo(padding, maxHeight - padding);
    ctx.closePath();
    ctx.fill();

    // Draw Points (Without Labels)
    ctx.fillStyle = '#A67A3B';
    data.forEach((value, index) => {
      const x = padding + (index / (data.length - 1)) * graphWidth;
      const y = maxHeight - padding - (value / maxData) * graphHeight;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }
}
