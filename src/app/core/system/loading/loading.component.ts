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
    /*'assets/custome/mobile-app-light.jpg',
    'assets/custome/cta-screens.png',
    'assets/custome/01-light.png',
    'assets/custome/07.png',
    'assets/custome/01.png',
    'assets/custome/03.png',
    'assets/custome/img.png',
    'assets/custome/img4-dark.png',
    'assets/custome/img6.png',
    'assets/custome/img9.png',
    'assets/custome/img5.png',
    'assets/custome/img3.jpg',*/
    'assets/custome/01-light.jpg',

   /* 'assets/custome/03-light.jpg',
    */
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
