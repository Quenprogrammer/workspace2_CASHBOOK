import {Component, OnInit, signal} from '@angular/core';
import {EncryptionService} from '../../services/encryption.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {companyName, logo} from '../data/companyInformation';
import {Router} from '@angular/router';
import { AuthStateService} from '../auth-state.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.css'
})
export class DebugComponent implements OnInit{
isValue!:string;

subscription!:Subscription
  /*form: FormGroup;

  constructor(public sharedService: AuthStateService,
    private fb: FormBuilder,
    private encryptionService: EncryptionService
  ) {
    this.form = this.fb.group({
      name: [''],
      address: [''],
      comment: ['']
    });
  }

  onSubmit() {
    const rawData = this.form.value;

    const encryptedData = {
      name: this.encryptionService.encrypt(rawData.name),
      address: this.encryptionService.encrypt(rawData.address),
      comment: this.encryptionService.encrypt(rawData.comment)
    };

    console.log('Encrypted form data:', encryptedData);
  }
*/
  protected readonly logo = logo;
  protected readonly companyName = companyName;


  username = signal('');
  password = signal('');

  constructor(public sharedService: AuthStateService,private router: Router) { }
  setValueTrue(): void {
    this.sharedService.setValue('eeeeeeeetrue');// or this.sharedService.setValue(true);

  }


  toggleValue(): void {
    this.sharedService.toggleValue();
  }

  login(): void {
    if (this.username() === 'admin@tibetrealty.com' && this.password() === 'a') {
      // Simulate login success
      localStorage.setItem('loggedIn', 'true');
      this.setValueTrue();
      this.router.navigate(['/menu']);
    } else {
      alert('Invalid username or password');
    }
  }
  ngOnInit(){
    this.subscription=this.sharedService.isValue$.subscribe(value =>
    {this.isValue=value});
    this.cleanCache()

}

  cleanCache(){
    localStorage.setItem('loggedIn', 'false');
  }
ngOnDestroy():void{
    this.subscription.unsubscribe()
}
}
