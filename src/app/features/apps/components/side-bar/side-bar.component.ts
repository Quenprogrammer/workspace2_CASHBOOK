import {Component} from '@angular/core';
import {companyName, email, logo} from '../../../data/companyInformation';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  protected readonly email = email;
  protected readonly companyName = companyName;
  protected readonly logo = logo;
}
