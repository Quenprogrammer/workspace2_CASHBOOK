import {Component} from '@angular/core';
import {DetailsDropDownComponent} from '../details-drop-down/details-drop-down.component';

@Component({
    selector: 'app-core-aspect',
    standalone: true,
  imports: [
    DetailsDropDownComponent
  ],
    templateUrl: './core-aspect.component.html',
    styleUrl: './core-aspect.component.css'
})
export class CoreAspectComponent {

}
