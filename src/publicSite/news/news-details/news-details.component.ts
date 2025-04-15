import {Component, inject, Input} from '@angular/core';
import {Article, News} from "../news";
import {Router, RouterLink} from "@angular/router";
import {findArticleByTitle} from "../news";
import {TruncateTextPipe} from '../../../shared/truncate-text-pipe/truncate-text.pipe';
import { NewlineToHtmlPipe } from '../../../shared/truncate-text-pipe/newline-to-html.pipe'; // Adjust path as needed

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [
    NewlineToHtmlPipe,
    TruncateTextPipe,
    RouterLink
  ],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css'
})
export class NewsDetailsComponent {
  news: Article | null = null;
  isLoading: boolean = true;
  router = inject(Router);

  constructor(){
    console.log('we are in news detail page');
  }


  @Input()
  set id(articleId: string) {
    const article = findArticleByTitle(articleId);
    console.log('our article id is', articleId);
    if (article) {
      this.news = article;
      console.log(article)
      this.isLoading = false;
    } else {
      this.router.navigateByUrl('/notfound');
    }
  }

  protected readonly News = News;
}
