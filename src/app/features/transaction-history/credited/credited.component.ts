import {Component, OnInit} from '@angular/core';
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import { Observable, BehaviorSubject, combineLatest, map } from 'rxjs';
import { Account, FirestoreService } from '../../../services/firestore/firestore.service';
import { DatePipe } from '@angular/common';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-credited',
  standalone: true,
  imports: [AsyncPipe, NgForOf, CurrencyPipe, NgIf, NgbCollapse],
  providers: [DatePipe],
  templateUrl: './credited.component.html',
  styleUrls: ['./credited.component.css']
})
export class CreditedComponent implements OnInit {
  isCollapsed = true;
  accounts$: Observable<Account[]> | undefined;
  filteredAccounts$: Observable<Account[]> | undefined;

  searchAmount = new BehaviorSubject<string>('');
  searchDate = new BehaviorSubject<string>('');
  searchRef = new BehaviorSubject<string>('');
  searchPayee = new BehaviorSubject<string>('');

  isModalOpen = false;
  selectedAccount: Account | null = null;

  constructor(
    private firestoreService: FirestoreService,
    private datePipe: DatePipe
  ) {}

  getFormattedDate(date: string | Date | undefined): string {
    if (!date) return 'Invalid Date'; // Handle undefined values
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return this.datePipe.transform(dateObj, 'yyyy-MM-dd') || 'Invalid Date';
  }

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
          (amount ? account.amount?.toString().includes(amount) : true) &&
          (date ? this.getFormattedDate(account.date) === date : true) &&
          (ref ? account.referenceNumber?.toLowerCase().includes(ref.toLowerCase()) : true) &&
          (payee ? account.payee?.toLowerCase().includes(payee.toLowerCase()) : true)
        );
      })
    );
  }

  updateSearch(field: 'amount' | 'date' | 'ref' | 'payee', event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

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
  showFilters = true; // Initially set to true




  printDetails() {
    if (!this.selectedAccount) return;

    const printWindow = window.open('', '', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write(`
      <html>
<head>
  <title>Transaction Details</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      text-align: center;
      background-color: #f8f9fa;
    }

    h2 {
      color: #007bff;
      margin-bottom: 10px;
    }

    .company-name {
      color: #343a40;
      font-weight: bold;
      font-size: 25px;
    }

    table {
      width: 60%;
      margin: 20px auto;
      border-collapse: collapse;
      background: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;
    }

    th, td {
      border: 1px solid #dee2e6;
      padding: 12px;
      text-align: left;
      font-size: 16px;
    }

    th {
      background-color: #007bff;
      color: white;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: #d1ecf1;
    }
  </style>
</head>
<body>

  <h2 class="company-name">SAHIZGroup</h2>
  <h2>Transaction Details</h2>

  <table>
    <tr><th>Date</th><td>${this.getFormattedDate(this.selectedAccount.date)}</td></tr>
    <tr><th>Payee</th><td>${this.selectedAccount.payee}</td></tr>
    <tr><th>Type</th><td>${this.selectedAccount.type}</td></tr>
    <tr><th>Amount</th><td>₦${this.selectedAccount.amount}</td></tr>
    <tr><th>Reference</th><td>${this.selectedAccount.referenceNumber}</td></tr>
    <tr><th>Description</th><td>${this.selectedAccount.description}</td></tr>
  </table>

</body>
</html>

    `);
      printWindow.document.close();
      printWindow.print();
    }
  }
}
