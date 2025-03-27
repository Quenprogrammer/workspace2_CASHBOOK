import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Account, FirestoreService } from '../../../services/firestore/firestore.service';
import { AsyncPipe, CurrencyPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { LoadingComponent } from '../../../core/system/loading/loading.component';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
export class DebitComponent implements OnInit {
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

  isDeletePopupOpen = false;
  accountToDelete: Account | null = null;

  constructor(private firestoreService: FirestoreService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.refreshAccounts();
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

  openDeletePopup(account: Account) {
    this.accountToDelete = account;
    this.isDeletePopupOpen = true;
  }

  closeDeletePopup() {
    this.isDeletePopupOpen = false;
    this.accountToDelete = null;
  }

  confirmDelete() {
    if (this.accountToDelete?.id) {
      // Dynamically choose the collection based on the account type (credit or debit)
      const collectionName = this.accountToDelete.type === 'credit' ? 'credit' : 'debit';
      this.firestoreService.deleteAccount(this.accountToDelete.id, collectionName)
        .then(() => {
          this.closeDeletePopup();
        })
        .catch(err => alert('Error deleting transaction: ' + err.message));
    } else {
      alert('Transaction ID not found.');
    }
  }


  downloadMarkdown() {
    this.filteredAccounts$?.subscribe(accounts => {
      if (accounts && accounts.length > 0) {
        let mdData = `# Debit Transactions\n\n`;

        accounts.forEach((account, index) => {
          mdData += `**SN:** ${String(index + 1).padStart(3, '0')}\n`;
          mdData += `**DATE:** ${account.date}\n`;
          mdData += `**NAME:** ${account.payee}\n`;
          mdData += `**AMOUNT:** ₦${account.amount}\n`;
          mdData += `**STATUS:** Pending\n\n---\n\n`;
        });

        const blob = new Blob([mdData], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'debit-transactions.md';
        link.click();
      } else {
        alert('No data available to download.');
      }
    });
  }

  refreshAccounts() {
    this.filteredAccounts$ = combineLatest([
      this.firestoreService.getDebit(),
      this.searchAmount,
      this.searchDate,
      this.searchRef,
      this.searchPayee
    ]).pipe(
      map(([accounts, amount, date, ref, payee]) =>
        accounts.filter(account =>
          (amount ? account.amount?.toString().includes(amount.trim()) : true) &&
          (date ? this.getFormattedDate(account.date) === date.trim() : true) &&
          (ref ? account.referenceNumber?.toLowerCase().includes(ref.trim().toLowerCase()) : true) &&
          (payee ? account.payee?.toLowerCase().includes(payee.trim().toLowerCase()) : true)
        )
      )
    );
  }
}
