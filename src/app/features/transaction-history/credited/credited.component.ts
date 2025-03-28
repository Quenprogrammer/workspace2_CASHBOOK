import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { Observable, BehaviorSubject, combineLatest, map } from 'rxjs';
import { Account, FirestoreService } from '../../../services/firestore/firestore.service';
import { DatePipe } from '@angular/common';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from '../../../core/system/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-credited',
  standalone: true,
  imports: [AsyncPipe, NgForOf, CurrencyPipe, NgIf, NgbCollapse, LoadingComponent, FormsModule, ReactiveFormsModule],
  providers: [DatePipe],
  templateUrl: './credited.component.html',
  styleUrls: ['./credited.component.css']
})
export class CreditedComponent implements OnInit {
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
    this.accounts$ = this.firestoreService.getAccounts();

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

}
