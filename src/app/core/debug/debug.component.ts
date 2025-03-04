import { Component } from '@angular/core';
import {AimsTagComponent} from '../system/aims-tag/aims-tag.component';

import {address, companyName, email, phone} from '../../features/data/companyInformation';
import {NotepadComponent} from '../../features/apps/notepad/notepad.component';
import {CalculatorComponent} from '../../features/apps/calculator/calculator.component';
import {BackupComponent} from '../../features/data/backup/backup.component';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [

    NotepadComponent,
    CalculatorComponent,
    BackupComponent
  ],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.css'
})
export class DebugComponent {

  protected readonly companyName = companyName;
  protected readonly address = address;
  protected readonly phone = phone;
  protected readonly email = email;
}
