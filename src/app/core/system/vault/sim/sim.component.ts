import { Component } from '@angular/core';

@Component({
  selector: 'app-sim',
  standalone: true,
  imports: [],
  templateUrl: './sim.component.html',
  styleUrl: './sim.component.css'
})
export class SimComponent {
  simCardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.simCardForm = this.fb.group({
      simNumber: ['', [Validators.required, Validators.pattern('^[0-9]{19,20}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      carrier: ['', Validators.required],
      accountHolderName: ['', Validators.required],
      activationDate: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      puk: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      simType: ['', Validators.required],
      roamingSettings: [false],
      imeiNumber: ['', [Validators.required, Validators.pattern('^[0-9]{15}$')]]
    });
  }

  onSubmit() {
    if (this.simCardForm.valid) {
      console.log('SIM Card Form Data:', this.simCardForm.value);
    } else {
      console.log('Invalid Form');
    }
  }
}
}
