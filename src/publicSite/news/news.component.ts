import { Component, signal } from '@angular/core';
import {NewsCardComponent} from './news-card/news-card.component';
import {News} from './news';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    NewsCardComponent
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  protected readonly News = News;
  isLoading = signal(true);

  constructor() {
    setTimeout(() =>{
      this.isLoading.set(false);
    },2000);
  }
}
