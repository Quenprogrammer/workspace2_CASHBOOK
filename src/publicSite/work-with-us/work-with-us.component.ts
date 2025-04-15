import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-work-with-us',
  standalone: true,
  imports: [],
  templateUrl: './work-with-us.component.html',
  styleUrl: './work-with-us.component.css'
})
export class WorkWithUsComponent {
  ngOnInit() {
    const options = {
      strings: ["North Cyprus?", "Nicosia?", "Kyrenia?", "Lefke?", "Famagusta?", "Iskele?",],
      typeSpeed: 90,
      backSpeed: 30,
      backDelay: 2500,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };


    const typed = new Typed('.js-typedjs', options);
  }

}
