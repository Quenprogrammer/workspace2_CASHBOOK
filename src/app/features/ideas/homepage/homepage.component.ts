import {Component, ElementRef, ViewChild} from '@angular/core';
import {electronics} from '../electronics/electronics';
import {NgForOf} from '@angular/common';
interface shopsData {
  name: string,
  description: string,
  url: string,
}
export interface Statistic {
  value: number;
  label: string;
  animatedValue?: number; // Optional property for animated value
}
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
shops=[

  {name:'Electronics', cover:'images/laptop.webp', url:''},
  {name:'Clothes', cover:'images/shops/img.png', url:''},
  {name:'Foods', cover:'', url:''},
  {name:'Funitures', cover:'images/shops/img_1.png', url:''},
  {name:'cars', cover:'', url:''},

]
  protected readonly electronics = electronics;

}
