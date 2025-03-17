import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {StatsLoadingComponent} from './stats-loading/stats-loading.component';
import {TextComponent} from '../../components/text/text.component';
import {RouterLink} from '@angular/router';
export interface Statistic {
  value: number;
  icon:  number | string;
  label: string;
  animatedValue?: number; // Optional property for animated value
}

@Component({
  selector: 'app-start-up',
  standalone: true,
  imports: [
    StatsLoadingComponent,
    TextComponent,
    RouterLink
  ],
  templateUrl: './start-up.component.html',
  styleUrl: './start-up.component.css'
})
export class StartUpComponent implements AfterViewInit {

  @ViewChild('lineChart') lineChart!: ElementRef;

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


  drawChart() {
    const ctx = this.lineChart.nativeElement.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(50, 400 - this.data.datasets[0].data[0]);
    for (let i = 1; i < this.data.labels.length; i++) {
      ctx.lineTo(50 + i * 50, 400 - this.data.datasets[0].data[i]);
    }
    ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
    ctx.stroke();
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = 0; i < this.data.labels.length; i++) {
      ctx.fillText(this.data.labels[i], 50 + i * 50, 410);
    }
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    for (let i = 0; i < this.data.datasets[0].data.length; i++) {
      ctx.fillText(this.data.datasets[0].data[i], 50 + i * 50, 400 - this.data.datasets[0].data[i] - 5);
    }
  }

  path:string='homeScreen/'
  statMenu=[
    { name: 'Contact Us', icon: this.path +'contactus.svg', link: '/cashbook' },
    { name: 'FAQ', icon: this.path+'faq.svg', link: '/cashbook' },
    { name: 'Privacy', icon: this.path+'privacy.svg', link: '/cashbook' },
    { name: 'Services', icon: this.path+'services.svg', link: '/cashbook' },
    { name: 'Subscription', icon: this.path+'subscription.svg', link: '/cashbook' },
    { name: 'Terms', icon: this.path+'terms.svg', link: '/cashbook' },

  ]
  progress = 0;
  increaseProgress() {
    this.progress += 10;
    if (this.progress > 100) {
      this.progress = 100;
    }
  }

  ngAfterViewInit() {
    setInterval(() => {
      if (this.progress < 100) {
        this.increaseProgress();
      }
    }, 1000);
    this.drawChart();
  }

}
