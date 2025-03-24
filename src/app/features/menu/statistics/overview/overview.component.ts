import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [



  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  @ViewChild('barChart') barChart!: ElementRef;

  data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Series 1',
      data: [100, 20, 70, 40, 50, 110, 70, 120, 90, 100, 110, 120],
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      borderColor: 'rgba(255, 0, 0, 1)',
      borderWidth: 1
    }]
  };

  ngAfterViewInit() {
    this.drawChart();
  }

  drawChart() {
    const ctx = this.barChart.nativeElement.getContext('2d');
    const barWidth = 50;
    const barSpacing = 10;

    // Draw bars
    for (let i = 0; i < this.data.datasets[0].data.length; i++) {
      const barHeight = this.data.datasets[0].data[i];
      ctx.fillStyle = this.data.datasets[0].backgroundColor;
      ctx.fillRect(50 + i * (barWidth + barSpacing), 400 - barHeight, barWidth, barHeight);
    }

    // Draw labels
    ctx.font = '16px Arial';
    ctx.color = 'red';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = 0; i < this.data.labels.length; i++) {
      ctx.fillText(this.data.labels[i], 50 + i * (barWidth + barSpacing) + barWidth / 2, 410);
    }

    // Draw values
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    for (let i = 0; i < this.data.datasets[0].data.length; i++) {
      ctx.fillText(this.data.datasets[0].data[i], 50 + i * (barWidth + barSpacing) + barWidth / 2, 400 - this.data.datasets[0].data[i] - 5);
    }
  }

}
