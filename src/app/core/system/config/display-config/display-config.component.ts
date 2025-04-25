import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-display-config',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './display-config.component.html',
  styleUrl: './display-config.component.css'
})
export class DisplayConfigComponent implements OnInit {
  ngOnInit(): void {
    // Retrieve values from localStorage
    const name = localStorage.getItem('name');
    const password = localStorage.getItem('password');
    const link = localStorage.getItem('link');

    // Display them or use them as required
    console.log('yes:');
    console.log('Tet size:', name);
    console.log('Password:', password);
    console.log('Link:', link);
  }

  font = [
    { value: 'Consolas'},
    { value: 'Times New Roman' },
    { value: 'Arial black' },
  ]
  appBackgroundColor = [
    { value: 'ash'},
    { value: 'red'},
    { value: 'black'},
    { value: 'purple'},
    { value: 'green'},

  ]
  textSize = [
    { value: '8px'},
    { value: '10px'},
    { value: '12px'},
    { value: '14px'},
    { value: '16px'},
    { value: '18'},
    { value: '20px'},
    { value: '22px'},
    { value: '26px'},
    { value: '29px'},
    { value: '30px'},

  ]
}
