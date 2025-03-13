import {Component, OnInit, OnDestroy, TemplateRef, inject} from '@angular/core';
import {DatePipe, NgIf} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-invalid-account',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
  ],
  templateUrl: './invalid-account.component.html',
  styleUrls: ['./invalid-account.component.css'],
  providers: [DatePipe]
})
export class InvalidAccountComponent implements OnInit, OnDestroy {
  currentDate: string | null = '';  // For date like Monday 28 November 2020
  hours: number = 0;  // Hours
  minutes: number = 0;  // Minutes
  seconds: number = 0;  // Seconds
  period: string = '';  // AM/PM
  private intervalId: any;  // To store the interval ID for cleanup

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    // Initialize the current date and time
    this.updateDateTime();

    // Set an interval to update the time every second
    this.intervalId = setInterval(() => {
      this.updateDateTime();
    }, 1000);  // Updates every 1000ms (1 second)
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed to avoid memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Method to update both date and time separately
  updateDateTime(): void {
    const now = new Date();

    // Format the date
    this.currentDate = this.datePipe.transform(now, 'EEEE dd MMMM yyyy');  // e.g., Monday 28 November 2020

    // Get hours, minutes, and seconds
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();

    // Determine AM/PM and convert to 12-hour format
    if (this.hours >= 12) {
      this.period = 'PM';
      if (this.hours > 12) {
        this.hours -= 12; // Convert to 12-hour format
      }
    } else {
      this.period = 'AM';
      if (this.hours === 0) {
        this.hours = 12; // Handle midnight case
      }
    }
  }

  inputValue = '';
  isModalOpen = false;
  openModal() {
    if (this.inputValue.trim() !== '') {
      this.isModalOpen = true;
    } else {
      alert('Please enter a value before proceeding.');
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }


  deliveryReport:string=
    '\n' +


    '\n' +
    'The message has been successfully delivered.  The delivery process was completed without any interruptions or complications.'+

    'If you require any further information regarding the message status, or if you have any concerns, please do not hesitate to contact us.\n' +
    '\n' +

    '\n'
}
