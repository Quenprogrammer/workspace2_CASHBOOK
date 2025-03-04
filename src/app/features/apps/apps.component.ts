import { Component } from '@angular/core';
import { paymentChannels} from '../../data/apps';
import {RouterLink} from '@angular/router';
import {TruncateTextPipe} from '../../shared/truncate-text-pipe/truncate-text.pipe';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [
    RouterLink,
    TruncateTextPipe
  ],
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.css'
})
export class AppsComponent {



  protected readonly paymentChannels = paymentChannels;

}
