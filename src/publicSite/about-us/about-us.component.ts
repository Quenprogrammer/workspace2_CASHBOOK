import { Component, ElementRef, ViewChild } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FactsAndFiguresComponent} from '../home/facts-and-figures/facts-and-figures.component';
import {DetailsDropDownComponent} from './details-drop-down/details-drop-down.component';
import{designed,} from"./socialAccount"
import {CoreAspectComponent} from './core-aspect/core-aspect.component';
import {environment} from '../../../environments/environment.development';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    RouterLink,
    FactsAndFiguresComponent,
    DetailsDropDownComponent,
    CoreAspectComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  env = environment;
  protected readonly designed = designed;
  @ViewChild('targetElement') targetElement!: ElementRef;
  @ViewChild('targetElement1') targetElement1!: ElementRef;
  @ViewChild('targetElement2') targetElement2!: ElementRef;
  @ViewChild('targetElement3') targetElement3!: ElementRef;
  @ViewChild('targetElement4') targetElement4!: ElementRef;
  scrollToElement() {
    this.targetElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToElement1() {
    this.targetElement1.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToElement2() {
    this.targetElement2.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToElement3() {
    this.targetElement3.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToElement4() {
    this.targetElement4.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}





