import { Component } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  imageUrls: string[] = [

  ];
  randomImageUrl!: string;

  constructor() { }
  ngOnInit(): void {
    this.setRandomImage();
    // Change image every 10 seconds
    interval(3000).subscribe(() => {
      this.setRandomImage();
    });
  }

  setRandomImage(): void {
    const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
    this.randomImageUrl = this.imageUrls[randomIndex];
  }
}
