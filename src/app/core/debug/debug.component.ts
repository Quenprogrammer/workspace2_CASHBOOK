import { Component } from '@angular/core';
import {AimsTagComponent} from '../system/aims-tag/aims-tag.component';

import {address, companyName, email, phone} from '../../features/data/companyInformation';
import {NotepadComponent} from '../../features/apps/notepad/notepad.component';
import {CalculatorComponent} from '../../features/apps/calculator/calculator.component';
import {BackupComponent} from '../../features/data/backup/backup.component';
import {AuthComponent} from '../system/auth/auth.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [

    NotepadComponent,
    CalculatorComponent,
    BackupComponent,
    AuthComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.css'
})
export class DebugComponent {

  protected readonly companyName = companyName;
  protected readonly address = address;
  protected readonly phone = phone;
  protected readonly email = email;

  equationForm: FormGroup;
  results: any;

  constructor(private fb: FormBuilder) {
    this.equationForm = this.fb.group({
      A: [500, Validators.required],
      S: [4, Validators.required],
      U: [3, Validators.required],
      P: [9, Validators.required],
      R: [5, Validators.required],
      k: [15, Validators.required]
    });
  }

  solveEquation() {
    const { A, S, U, P, R, k } = this.equationForm.value;

    const k_value = (A * (S + U) * (P - R)) / ((S + R) + ((U**3 + P**2) / ((S + U) * (P - R))));
    const S_value = (A * k - (S + R) * U**3 - P**2) / (k * (P - R) - U**3);
    const U_value = ((A * k - (S + U) * (P - R) - P**2) / (S + R)) ** (1/3);
    const P_value = Math.sqrt(A * k - (S + U) * (P - R) - (S + R) * U**3);
    const R_value = P - ((A * k - (S + R) * U**3 - P**2) / (S + U));

    this.results = { k: k_value, S: S_value, U: U_value, P: P_value, R: R_value };
  }

}
