import {Component, OnInit, signal} from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import {Observable, BehaviorSubject, combineLatest, map, take, of} from 'rxjs';
import { Account, FirestoreService } from '../../../services/firestore/firestore.service';
import { DatePipe } from '@angular/common';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from '../../../core/system/loading/loading.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DownloadService} from '../../../services/download.service';
import {doc, Firestore, getDoc, updateDoc} from '@angular/fire/firestore';
import {companyName} from '../../data/companyInformation';

@Component({
  selector: 'app-credited',
  standalone: true,
  imports: [AsyncPipe, NgForOf, CurrencyPipe, NgIf, NgbCollapse,  FormsModule, ReactiveFormsModule],
  providers: [DatePipe],
  templateUrl: './credited.component.html',
  styleUrls: ['./credited.component.css']
})
export class CreditedComponent implements OnInit {
  isLoading = true;
  isCollapsed = true;
  showFilters = true;
  publicSiteModalOpen = signal(false);

  accounts$: Observable<Account[]> | undefined;
  filteredAccounts$: Observable<Account[]> = new Observable<Account[]>(); // Initialize with empty Observable


  searchAmount = new BehaviorSubject<string>('');
  searchDate = new BehaviorSubject<string>('');
  searchRef = new BehaviorSubject<string>('');
  searchPayee = new BehaviorSubject<string>('');

  isModalOpen = false;
  selectedAccount: Account | null = null;
  openPublicSiteModal() {
    this.publicSiteModalOpen.set(true);
  }
  closePublicSiteModal() {
    this.publicSiteModalOpen.set(false);
  }
  /** ✅ Delete Popup Variables */
  isDeletePopupOpen = false;
  accountToDelete: Account | null = null;

  constructor(private firestore: Firestore, private firestoreService: FirestoreService, private datePipe: DatePipe,  private downloadService: DownloadService) {}

  ngOnInit() {
    this.accounts$ = this.firestoreService.getAccounts();
    this.filteredAccounts$ = combineLatest([
      this.accounts$ || of([]),  // Use a default value if accounts$ is undefined
      this.searchAmount,
      this.searchDate,
      this.searchRef,
      this.searchPayee
    ]).pipe(
      map(([accounts, amount, date, ref, payee]) => {
        return accounts.filter(account =>
          (amount ? account.amount?.toString().includes(amount.trim()) : true) &&
          (date ? account.date?.toString().includes(date.trim()) : true) &&
          (ref ? account.referenceNumber?.toLowerCase().includes(ref.trim().toLowerCase()) : true) &&
          (payee ? account.payee?.toLowerCase().includes(payee.trim().toLowerCase()) : true)
        );
      })
    );

    this.accounts$.pipe(take(1)).subscribe(() => {
      this.isLoading = false;
    });

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
    this.selectedAccount = null;  // Reset selected account
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

  confirmDelete() {
    if (this.accountToDelete?.id) {
      // Use the correct collection name: 'credit'
      this.firestoreService.deleteAccount(this.accountToDelete.id, 'credit')
        .then(() => {
          alert('Transaction deleted successfully.');
          this.closeDeletePopup();

          // Optional: Refresh list if not reactive
          // this.accounts$ = this.firestoreService.getAccounts();
        })
        .catch(err => {
          console.error('Deletion error:', err);
          alert('Error deleting transaction: ' + err.message);
        });
    } else {
      alert('Transaction ID not found.');
    }
  }



  downloadCSV() {
    if (this.filteredAccounts$) {
      this.downloadService.downloadCSV(this.filteredAccounts$, ['date', 'payee', 'amount', 'referenceNumber','paymentMode'], 'credit-transactions');
    } else {
      alert('No data available to download');
    }
  }


  downloadExcel() {
    this.downloadService.downloadExcel(this.filteredAccounts$, 'credit-transactions');
  }

 downloadPDF() {
    this.downloadService.downloadPDF(this.filteredAccounts$, ['date', 'payee', 'amount', 'referenceNumber'], 'credit-transactions');
   }

  downloadJSON() {
    this.downloadService.downloadJSON(this.filteredAccounts$, 'credit-transactions');
  }

  downloadTXT() {
    this.downloadService.downloadTXT(this.filteredAccounts$, 'credit-transactions');
  }


  downloadAsWord() {
    const fields = ['date', 'amount', 'description']; // your actual fields
    this.downloadService.downloadWord(this.filteredAccounts$, fields, 'credit-transactions');
  }

  saveModalAsPDF() {
    if (!this.selectedAccount) {
      alert('No transaction selected.');
      return;
    }

    this.downloadService.downloadSingleTransactionPDF(this.selectedAccount, 'credit-transaction');
  }

  async subtractFromTotalAmount() {
    const collectionName = 'totalCredit';
    const docId = 'totalCredited';

    try {
      const docRef = doc(this.firestore, collectionName, docId);
      const docSnapshot = await getDoc(docRef);

      if (!docSnapshot.exists()) {
        throw new Error('Document not found');
      }

      const docData = docSnapshot.data() as { totalAmount: number };

      if (this.accountToDelete && this.accountToDelete.amount != null) {
        const updatedAmount = docData.totalAmount - this.accountToDelete.amount;
        await updateDoc(docRef, { totalAmount: updatedAmount });
        console.log('Document updated successfully');
      } else {
        alert('Account to delete has no valid amount');
      }

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error updating document:', error);
        alert('Failed to update total amount: ' + error.message);
        throw error;  // Rethrow the error for higher-level handling
      } else {
        console.error('Unknown error:', error);
        alert('An unexpected error occurred.');
        throw new Error('An unexpected error occurred');
      }
    }
  }


  printDetails() {
    if (
      !this.selectedAccount ||
      !this.selectedAccount.date ||
      !this.selectedAccount.amount ||
      !this.selectedAccount.payee
    ) {
      alert('Selected transaction is incomplete or unavailable.');
      return;
    }

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
    <tr><th>Date</th><td>${this.selectedAccount.date}</td></tr>
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

  protected readonly companyName = companyName;
}





