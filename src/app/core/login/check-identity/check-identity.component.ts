import {Component, inject, OnDestroy, signal, WritableSignal} from '@angular/core';
import { NgIf } from '@angular/common';
import {
  Firestore,
  collection,
  query,
  where,
  getDocs,
  DocumentData
} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { TokenLoginComponent } from '../token-login/token-login.component';
import { EmailLoginComponent } from '../email-login/email-login.component';
import { OTPLoginComponent } from '../otplogin/otplogin.component';
import {Router} from '@angular/router';
import {Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-check-identity',
  standalone: true,
  imports: [
    NgIf,
    TokenLoginComponent,
    EmailLoginComponent,
    OTPLoginComponent,
    FormsModule
  ],
  templateUrl: './check-identity.component.html',
  styleUrls: ['./check-identity.component.css', '../../../../styles/modal.scss']
})
export class CheckIdentityComponent implements OnDestroy{
  EndTime =70;

  subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = timer(0, 1000).subscribe(() => {
      this.EndTime--;
      if (this.EndTime == 0) {
        this.subscription.unsubscribe();
        this.router.navigate(['/userTimeUp']);
      }
    });
  }


  emailInput: string = '';
  emailExists: boolean | null = null;
  userInfo: DocumentData | null = null;

  private firestore: Firestore = inject(Firestore);

  async searchUserByEmail(email: string): Promise<void> {
    const usersRef = collection(this.firestore, 'users');
    const q = query(usersRef, where('email', '==', email));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      this.emailExists = true;
      this.userInfo = snapshot.docs[0].data(); // get the first matched doc
    } else {
      this.emailExists = false;
      this.userInfo = null;
    }
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  moduleModalOpen: boolean = false;
  moduleModalOpen2: boolean = false;
  moduleModalOpen3: boolean = false;

  moduleCloseModal(): void {
    this.moduleModalOpen = false;
  }
  moduleOpenModal(): void {
    this.moduleModalOpen = true;
  }
  moduleCloseModal2(): void {
    this.moduleModalOpen2 = false;
  }
  moduleOpenModal2(): void {
    this.moduleModalOpen2 = true;
  }
  moduleCloseModal3(): void {
    this.moduleModalOpen3 = false;
  }
  moduleOpenModal3(): void {
    this.moduleModalOpen3 = true;
  }
}
