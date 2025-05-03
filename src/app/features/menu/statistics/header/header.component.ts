import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  data =[
    { name: 'Accounts', count: 0,   logo: 'icons/customeimage/Rocket.svg' },
    { name: 'Apps', count: 0,   logo: 'icons/customeimage/Rocket.svg' },
    { name: 'Notifications', count: 0,   logo: 'icons/customeimage/Norah.svg' },
    { name: 'Recycle Bin', count: 0,   logo: 'icons/customeimage/Mousehand.svg' },
    { name: 'Invoice', count: 0,   logo: 'icons/customeimage/Mousehand.svg' },
    { name: 'Transactions', count: 0,   logo: 'icons/customeimage/Mousehand.svg' },
    { name: 'Inbox', count: 0,   logo: 'icons/customeimage/Mousehand.svg' },
    { name: 'Logs', count: 0,   logo: 'icons/customeimage/Mousehand.svg' },

  ]
}
