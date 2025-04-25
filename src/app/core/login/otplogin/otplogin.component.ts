import { Component, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { FirestoreUtilService } from '../../../shared/firestore-util.service';

@Component({
  selector: 'app-otplogin',
  standalone: true,
  imports: [],
  templateUrl: './otplogin.component.html',
  styleUrl: './otplogin.component.css'
})
export class OTPLoginComponent implements OnInit, OnDestroy {
  message = 'Checking...';
  isLoading = signal<boolean>(false);
  isOnline: boolean = true;
  currentDate!: string;
  currentTime: string = '';
  private timer: any;

  constructor(
    private utilService: FirestoreUtilService,
    @Inject(Firestore) private firestore: Firestore
  ) {}

  async ngOnInit() {
    this.updateTime();
    const exists = await this.utilService.documentExists('users/abc123');
    this.message = exists ? 'Document exists ✅' : 'Document does NOT exist ❌';
    this.addData();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  updateTime(): void {
    const now = new Date();
    this.currentDate = now.toLocaleDateString();
    this.currentTime = now.toLocaleTimeString();

    this.timer = setInterval(() => {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
    }, 1000);
  }

  addData(): void {
    const data = {
      name: 'John Doe',
      age: 30,
      occupation: 'Software Developer',
      date: this.currentDate
    };

    const setDataDocRef = doc(this.firestore, 'OTP/SetDATA');

    setDoc(setDataDocRef, data)
      .then(() => {
        console.log('Data added successfully!');
      })
      .catch((error) => {
        console.error('Error adding data: ', error);
      });
  }
}
