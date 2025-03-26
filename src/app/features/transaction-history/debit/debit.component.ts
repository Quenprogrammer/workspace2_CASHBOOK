import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from 'rxjs';
import {Account, FirestoreService} from '../../../services/firestore/firestore.service';
import {AsyncPipe, CurrencyPipe, DatePipe, NgForOf, NgIf} from '@angular/common';
import {LoadingComponent} from '../../../core/system/loading/loading.component';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-debit',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    LoadingComponent,
    NgForOf,
    NgIf,
    NgbCollapse,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  templateUrl: './debit.component.html',
  styleUrl: './debit.component.css'
})
export class DebitComponent implements OnInit{
  isLoading = true;
  isCollapsed = true;
  showFilters = true;
  accounts$: Observable<Account[]> | undefined;
  filteredAccounts$: Observable<Account[]> | undefined;

  searchAmount = new BehaviorSubject<string>('');
  searchDate = new BehaviorSubject<string>('');
  searchRef = new BehaviorSubject<string>('');
  searchPayee = new BehaviorSubject<string>('');

  isModalOpen = false;
  selectedAccount: Account | null = null;

  /** ✅ Delete Popup Variables */
  isDeletePopupOpen = false;
  accountToDelete: Account | null = null;

  constructor(private firestoreService: FirestoreService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.accounts$ = this.firestoreService.getDebit();

    this.filteredAccounts$ = combineLatest([
      this.accounts$,
      this.searchAmount,
      this.searchDate,
      this.searchRef,
      this.searchPayee
    ]).pipe(
      map(([accounts, amount, date, ref, payee]) => {
        return accounts.filter(account =>
          (amount ? account.amount?.toString().includes(amount.trim()) : true) &&
          (date ? this.getFormattedDate(account.date) === date.trim() : true) &&
          (ref ? account.referenceNumber?.toLowerCase().includes(ref.trim().toLowerCase()) : true) &&
          (payee ? account.payee?.toLowerCase().includes(payee.trim().toLowerCase()) : true)
        );
      })
    );

    this.accounts$.subscribe(() => {
      this.isLoading = false;
    });
  }

  getFormattedDate(date: string | Date | undefined): string {
    if (!date) return 'Invalid Date';
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return this.datePipe.transform(dateObj, 'yyyy-MM-dd') || 'Invalid Date';
  }

  updateSearch(field: 'amount' | 'date' | 'ref' | 'payee', event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim();

    switch (field) {
      case 'amount': this.searchAmount.next(value); break;
      case 'date': this.searchDate.next(value); break;
      case 'ref': this.searchRef.next(value); break;
      case 'payee': this.searchPayee.next(value); break;
    }
  }

  openModal(account: Account) {
    this.selectedAccount = account;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedAccount = null;
  }

  /** ✅ OPEN DELETE POPUP */
  openDeletePopup(account: Account) {
    this.accountToDelete = account;
    this.isDeletePopupOpen = true;
  }

  /** ✅ CLOSE DELETE POPUP */
  closeDeletePopup() {
    this.isDeletePopupOpen = false;
    this.accountToDelete = null;
  }

  /** ✅ CONFIRM DELETE */
  confirmDelete() {
    if (this.accountToDelete?.id) {
      this.firestoreService.deleteAccount(this.accountToDelete.id)
        .then(() => {

          this.closeDeletePopup(); // ✅ Close popup after delete
        })
        .catch(err => alert('Error deleting transaction: ' + err.message));
    } else {
      alert('Transaction ID not found.');
    }
  }
  downloadJSON() {
    this.filteredAccounts$?.subscribe(accounts => {
      if (accounts && accounts.length > 0) {
        const jsonData = JSON.stringify(accounts, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'debit-transactions.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        alert('No data available to download.');
      }
    });
  }
  downloadTXT() {
    this.filteredAccounts$?.subscribe(accounts => {
      if (accounts && accounts.length > 0) {
        let textData = '';

        accounts.forEach((account, index) => {
          const sn = `SN: ${String(index + 1).padStart(3, '0')}`.padEnd(10); // Align SN
          const date = `DATE: ${account.date}`.padEnd(20);
          const name = `Name: ${account.payee}`.padEnd(25);
          const amount = `Amount: ₦${account.amount}`.padEnd(20);
          const status = `Status: Pending`;

          textData += `${sn}${date}${name}${amount}${status}\n\n`; // Double line break
        });

        const blob = new Blob([textData], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'debit-transactions.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        alert('No data available to download.');
      }
    });
  }
  downloadCSV() {
    this.filteredAccounts$?.subscribe(accounts => {
      if (accounts && accounts.length > 0) {
        let csvData = 'SN,DATE,NAME,AMOUNT,STATUS\n'; // CSV Header

        accounts.forEach((account, index) => {
          const sn = String(index + 1).padStart(3, '0'); // Serial number with zero padding
          const date = account.date;
          const name = account.payee;
          const amount = `₦${account.amount}`;
          const status = 'Pending';

          csvData += `${sn},${date},${name},${amount},${status}\n`; // Add data row
        });

        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'debit-transactions.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        alert('No data available to download.');
      }
    });
  }




}
