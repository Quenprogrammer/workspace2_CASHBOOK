import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {TokenLoginComponent} from '../token-login/token-login.component';
import {EmailLoginComponent} from '../email-login/email-login.component';
import {OTPLoginComponent} from '../otplogin/otplogin.component';

@Component({
  selector: 'app-check-identity',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    TokenLoginComponent,
    EmailLoginComponent,
    OTPLoginComponent
  ],
  templateUrl: './check-identity.component.html',
  styleUrls: ['./check-identity.component.css', '../../../../styles/modal.scss']
})
export class CheckIdentityComponent {
  moduleModalOpen: boolean = false;
  moduleCloseModal(): void {
    this.moduleModalOpen = false;
  }
  moduleOpenModal(): void {
    this.moduleModalOpen = true;
  }
  moduleModalOpen3: boolean = false;
  moduleCloseModal3(): void {
    this.moduleModalOpen3 = false;
  }
  moduleOpenModal3(): void {
    this.moduleModalOpen3 = true;
  }
  moduleModalOpen2: boolean = false;
  moduleCloseModal2(): void {
    this.moduleModalOpen2 = false;
  }
  moduleOpenModal2(): void {
    this.moduleModalOpen2 = true;
  }
}
