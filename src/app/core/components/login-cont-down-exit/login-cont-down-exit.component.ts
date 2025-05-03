import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {address, companyName} from '../../../features/data/companyInformation';

@Component({
  selector: 'app-login-cont-down-exit',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './login-cont-down-exit.component.html',
  styleUrl: './login-cont-down-exit.component.css'
})
export class LoginContDownExitComponent {

  protected readonly companyName = companyName;
  protected readonly address = address;
}
