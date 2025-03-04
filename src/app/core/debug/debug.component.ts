import { Component } from '@angular/core';
import {AimsTagComponent} from '../system/aims-tag/aims-tag.component';
import {IDEASTestingComponent} from '../../features/ideas/ideas-testing/ideas-testing.component';
import {ElectronicsComponent} from '../../features/ideas/electronics/electronics.component';
import {HomepageComponent} from '../../features/ideas/homepage/homepage.component';
import {address, companyName, email, phone} from '../../features/data/companyInformation';
import {NotepadComponent} from '../../features/apps/notepad/notepad.component';
import {CalculatorComponent} from '../../features/apps/calculator/calculator.component';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [
    AimsTagComponent,
    IDEASTestingComponent,
    ElectronicsComponent,
    HomepageComponent,
    NotepadComponent,
    CalculatorComponent
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
