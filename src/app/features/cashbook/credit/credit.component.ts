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
user:string='';
Operation:string='';
message:string='new transaction'
  currentTime: Date = new Date();
  today: Date = new Date();
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
await  this.addNotifications();
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
          await this.incrementTransactions();
        } else {
          await setDoc(documentRef, { totalAmount: updatedTotalAmount });
        }

        await this.updateSystemTotal(transactionType, dataToSubmit.amount);
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

  async addNotifications() {
    const usersCollection = collection(this.firestore, 'NOTIFICATIONS');
    try {
      await addDoc(usersCollection, { type: this.Operation, message: this.message, date:this.today , status:'successfully',user:this.user });
      console.log('Operation completed');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async incrementTransactions() {
    try {
      const docRef = doc(this.firestore, 'SYSTEM_DATA_HISTORY', 'TOTAL_TRANSACTION');
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const docData = docSnapshot.data() as { transactions: number };
        const currentTransactions = docData.transactions || 0;

        await updateDoc(docRef, {
          transactions: currentTransactions + 1
        });

        this.toastService.show('', 'Transaction count updated successfully.', 'success');
        console.log('Transaction count updated successfully.');
      } else {
        // If the document doesn't exist, create it with initial count 1
        await setDoc(docRef, { transactions: 1 });
        this.toastService.show('', 'Transaction count started at 1.', 'success');
        console.log('Transaction count started at 1.');
      }
    } catch (error) {
      console.error('Error updating transactions:', error);
      this.toastService.show('', 'Error updating transactions.', 'danger');
    }
  }

  async updateSystemTotal(transactionType: string, amount: number) {
    const fieldKey = transactionType === 'credit' ? 'total_income' : 'total_debit';
    const docRef = doc(this.firestore, 'SYSTEM_DATA_HISTORY', 'TOTAL_INCOME');

    try {
      const docSnap = await getDoc(docRef);
      let current = 0;

      if (docSnap.exists()) {
        const data = docSnap.data() as { [key: string]: number };
        current = data[fieldKey] || 0;
      }

      const newTotal = current + amount;
      // ✅ Provide all 3 arguments to setDoc, including merge option
      await setDoc(docRef, { [fieldKey]: newTotal }, { merge: true });

      console.log(`Updated SYSTEM_DATA_HISTORY → ${fieldKey}: ${newTotal}`);
    } catch (error) {
      console.error('Failed to update SYSTEM_DATA_HISTORY:', error);
    }
  }
}
