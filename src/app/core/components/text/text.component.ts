import {Component, Input} from '@angular/core';
import {fontFamily, textColor, textFontSize} from '../../system/config';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Input() public text: string = '';
  protected readonly textFontSize = textFontSize;
  protected readonly fontFamily = fontFamily;
  protected readonly textColor = textColor;
}
