import {Component} from '@angular/core';

@Component({
    selector: 'app-barchart',
    standalone: true,
    imports: [],
    templateUrl: './barchart.component.html',
    styleUrl: './barchart.component.css'
})
export class BarchartComponent {
  ngAfterViewInit() {
    this.drawChart();
  }

  drawChart() {
    const canvas = document.getElementById('pie') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const data = [100, 200, 175, 250, 180]; // Example values
    const labels = ['A', 'B', 'C', 'D', 'E'];
    const colors = ['#A67A3B', '#FF5733', '#3498DB', '#2ECC71', '#F1C40F'];

    const total = data.reduce((sum, value) => sum + value, 0);
    let startAngle = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 2 - 20;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Pie Chart
    data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = colors[index];
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      startAngle = endAngle;
    });

    // Add Labels
    startAngle = 0;
    ctx.fillStyle = 'black';
    ctx.font = '14px Inter, sans-serif';
    ctx.textAlign = 'center';

    data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;
      const angle = startAngle + sliceAngle / 2;
      const x = centerX + Math.cos(angle) * (radius / 1.5);
      const y = centerY + Math.sin(angle) * (radius / 1.5);

      ctx.fillText(labels[index], x, y);
      startAngle += sliceAngle;
    });
  }

}
