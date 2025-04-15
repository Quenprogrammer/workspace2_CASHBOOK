import {Component, Input} from '@angular/core';
import {headingFontFamily, smallHeadingFontSize} from '../../system/config';

@Component({
  selector: 'app-heading-small',
  standalone: true,
  imports: [],
  templateUrl: './heading-small.component.html',

})
export class HeadingSmallComponent {
  @Input() public text: string = '';
  protected readonly headingFontFamily = headingFontFamily;
  protected readonly smallHeadingFontSize = smallHeadingFontSize;
}
