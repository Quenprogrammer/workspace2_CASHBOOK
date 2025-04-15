import {Component, Input} from '@angular/core';
import {headingFontFamily, headingFontSize} from '../../system/config';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',

})
export class HeadingComponent {
  @Input() public text: string = '';
  protected readonly headingFontSize = headingFontSize;
  protected readonly headingFontFamily = headingFontFamily;

}
