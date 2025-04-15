import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastService } from '../../../services/toast-services';
import {Firestore, collection, addDoc, collectionData, getDoc, doc, updateDoc, setDoc} from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { NgClass, NgIf } from "@angular/common";


import {StatsComponent} from '../../../shared/stats/stats.component';
import {TruncateTextPipe} from "../../../shared/truncate-text-pipe/truncate-text.pipe";


export interface MessageInquiries {
  date: string;
  referenceNumber: string;
  description: string;
  account: string;
  amount: number;
  payee: string;
  paymentMode: string;
}

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgClass,


  ],
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {

  inquiriesMessage$: Observable<MessageInquiries[]>;
  generalMessageInquiries: any; // Moved declaration here

  GeneralInquiriesMessage = new FormGroup({
    date: new FormControl(this.getCurrentDate(), [Validators.required]),
    referenceNumber: new FormControl({ value: '', disabled: true }, [Validators.required]),
    description: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]), // ✅ Type field (Credit/Debit)
    amount: new FormControl('', [Validators.required, Validators.min(0)]),
    account: new FormControl('', [Validators.required]),
    payee: new FormControl('', [Validators.required]),
    paymentMode: new FormControl('', [Validators.required])
  });

  constructor(private firestore: Firestore, private toastService: ToastService) {
    this.inquiriesMessage$ = collectionData(collection(this.firestore, 'Transactions'), { idField: 'id' }) as Observable<MessageInquiries[]>;
  }

  ngOnInit() {
    this.generateRandomNumber();
  }

  getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  async onSubmit() {
    if (this.GeneralInquiriesMessage.valid) {
      const transactionType = this.GeneralInquiriesMessage.value.type?.toString().toLowerCase();

      if (!transactionType || (transactionType !== 'credit' && transactionType !== 'debit')) {
        this.toastService.show('', 'Invalid transaction type.', 'danger');
        return;
      }

      const targetCollection = collection(this.firestore, transactionType);
      const dataToSubmit = {
        date: this.GeneralInquiriesMessage.value.date ?? '', // Ensure a default empty string
        referenceNumber: this.GeneralInquiriesMessage.get('referenceNumber')?.value ?? '',
        description: this.GeneralInquiriesMessage.value.description ?? '',
        type: transactionType ?? '',
        amount: parseFloat(this.GeneralInquiriesMessage.value.amount ?? '0'), // Ensure decimal values are stored correctly
        account: this.GeneralInquiriesMessage.value.account ?? '',
        payee: this.GeneralInquiriesMessage.value.payee ?? '',
        paymentMode: this.GeneralInquiriesMessage.value.paymentMode ?? ''
      };

      try {
        // Save the transaction in the appropriate collection (credit/debit)
        await addDoc(targetCollection, dataToSubmit);

        // Reset the form and generate a new reference number
        this.GeneralInquiriesMessage.reset();
        this.generateRandomNumber();
        //here

        console.log(`Transaction saved successfully to ${transactionType} collection`);
        this.toastService.show('', `Transaction saved successfully to ${transactionType} collection`, 'success');

        // Determine the total amount collection and document ID
        const totalCollection = transactionType === 'credit' ? 'totalCredit' : 'totalDebit';
        const documentId = transactionType === 'credit' ? 'totalCredited' : 'totalDebited';
        const documentRef = doc(this.firestore, totalCollection, documentId);

        // Fetch current total amount
        const docSnapshot = await getDoc(documentRef);
        let updatedTotalAmount = dataToSubmit.amount;

        if (docSnapshot.exists()) {
          const docData = docSnapshot.data() as { [key: string]: any }; // Ensure correct type handling
          const currentTotalAmount = docData["totalAmount"] || 0;
          updatedTotalAmount += currentTotalAmount;

          await updateDoc(documentRef, { totalAmount: updatedTotalAmount });
        } else {
          await setDoc(documentRef, { totalAmount: updatedTotalAmount });
        }


        console.log(`Updated ${transactionType} total amount: ${updatedTotalAmount}`);
      } catch (error) {
        console.error('Error saving transaction:', error);
        this.toastService.show('', 'Error saving transaction', 'danger');
      }
    } else {
      console.log('Form is invalid');
      this.toastService.show('', 'Please fill in all required fields correctly.', 'danger');
    }
  }









  get date() { return this.GeneralInquiriesMessage.get('date'); }
  get referenceNumber() { return this.GeneralInquiriesMessage.get('referenceNumber'); }
  get description() { return this.GeneralInquiriesMessage.get('description'); }
  get account() { return this.GeneralInquiriesMessage.get('account'); }
  get amount() { return this.GeneralInquiriesMessage.get('amount'); }
  get type() { return this.GeneralInquiriesMessage.get('amount'); }
  get payee() { return this.GeneralInquiriesMessage.get('payee'); }
  get paymentMode() { return this.GeneralInquiriesMessage.get('paymentMode'); }

  generateRandomNumber() {
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    const randomNum = (randomBuffer[0] % 900000000) + 100000000; // 9-digit number
    this.GeneralInquiriesMessage.patchValue({ referenceNumber: randomNum.toString() });
  }


}
