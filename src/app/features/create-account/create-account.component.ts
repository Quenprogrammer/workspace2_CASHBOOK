import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {ToastService} from "../../services/toast-services";
import {RouterLink} from "@angular/router";
interface MessageInquiries {
  accountName: string;
  description: string;
  code: string;
  category: string;
}
@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    NgClass,
    RouterLink
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  firestore: Firestore = inject(Firestore);
  accountsInformation = collection(this.firestore, 'cashbook accounts');
  inquiriesMessage$: Observable<MessageInquiries[]>;

  constructor() {
    const accountsInformation = collection(this.firestore, 'cashbook accounts');
    this.inquiriesMessage$ = collectionData(accountsInformation, { idField: 'id' }) as Observable<MessageInquiries[]>;
  }

  toastService = inject(ToastService);

  GeneralInquiriesMessage = new FormGroup({
    accountName: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    code: new FormControl('', [Validators.pattern(/^\+?\d{10,15}$/)]),
    category: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  onSubmit() {
    if (this.GeneralInquiriesMessage.valid) {
      const { accountName, description,  code,  category } = this.GeneralInquiriesMessage.value;
      addDoc(this.accountsInformation, {
        accountName,
        description,
        code,
        category,
      })
        .then((documentReference) => {
          this.toastService.show('', 'Message sent successfully', 'success');
          this.GeneralInquiriesMessage.reset();
        })
        .catch(e => {
          this.toastService.show('', 'Error encountered while sending message', 'danger');
        });
    } else {
      this.toastService.show('', 'Please fill in all required fields correctly.', 'danger');
    }
  }

  get accountName() {
    return this.GeneralInquiriesMessage.get('accountName');
  }


  get code() {
    return this.GeneralInquiriesMessage.get('code');
  }


  get category() {
    return this.GeneralInquiriesMessage.get('category');
  }
}
