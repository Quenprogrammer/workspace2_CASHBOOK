import {Component, OnInit, signal} from '@angular/core';
import { Observable } from 'rxjs';
import { BackupService } from '../../../services/backup.service';
import {DataServiceService} from '../../../services/dataService';
import {GetCollectionCountService} from '../../../services/get-collection-count.service';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {allIcons} from '../../../../../public/icons/icons';
import {RouterLink} from '@angular/router';
import {companyName} from '../companyInformation';
import {SystemComponent} from '../system/system.component';
interface collectionsDataInterface{
  name: string;
  icon: string;
 documents: string;
}
@Component({
  selector: 'app-backup',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink,
    SystemComponent,
    NgClass
  ],
  templateUrl: './backup.component.html',
  styleUrl: './backup.component.css'
})
export class BackupComponent implements OnInit {
  isModalOpen=false
  authModal = signal<boolean>(false);
  constructor(private firestoreService: DataServiceService,private getDocs: GetCollectionCountService) {}

  ngOnInit(): void {
    this.getDocs.getCountsForCollections(this.collectionsToCheck).subscribe(stats => {
      const totalDocs = stats.reduce((sum, stat) => sum + (stat.count || 0), 0);

      this.collectionStats = stats.map(stat => {
        const match = this.collectionsDetails.find(
          item => item.name.toLowerCase() === stat.name.toLowerCase()
        );
        const percentage = totalDocs > 0 ? ((stat.count || 0) / totalDocs) * 100 : 0;

        return {
          ...stat,
          icon: match?.icon || 'bi-folder',
          percentage: percentage.toFixed(1)
        };
      });
    });
  }


  collectionStats: { name: string, count: number, icon: string, percentage: string }[] = [];

  collectionsToCheck = [
    'General-inquiries',
    'HOMESETTINGS',
    'LEADS',
    'Notifications',
    'banks',
    'cashbook accounts',
    'config',
    'credit',
    'credit-card-info',
    'crypto-tokens',
    'debit',
    'income',
    'logs',
    'testingData',
    'totalCredit',
    'totalDebit',
    'transaction',
    'transfer',
    'transfer_by_login',
    'users'
  ];


  collectionsDetails: collectionsDataInterface[] = [
    { name: 'General-inquiries', icon: 'bi-envelope', documents: '' },
    { name: 'HOMESETTINGS', icon: 'bi-house-door', documents: '' },
    { name: 'LEADS', icon: 'bi-person-plus', documents: '' },
    { name: 'Notifications', icon: 'bi-bell', documents: '' },
    { name: 'banks', icon: 'bi-bank', documents: '' },
    { name: 'cashbook accounts', icon: 'bi-cash-stack', documents: '' },
    { name: 'config', icon: 'bi-tools', documents: '' },
    { name: 'credit', icon: 'bi-plus-circle', documents: '' },
    { name: 'credit-card-info', icon: 'bi-credit-card-2-front', documents: '' },
    { name: 'crypto-tokens', icon: 'bi-currency-bitcoin', documents: '' },
    { name: 'debit', icon: 'bi-dash-circle', documents: '' },
    { name: 'income', icon: 'bi-currency-exchange', documents: '' },
    { name: 'logs', icon: 'bi-clock', documents: '' },
    { name: 'testingData', icon: 'bi-bezier', documents: '' },
    { name: 'totalCredit', icon: 'bi-bar-chart-line', documents: '' },
    { name: 'totalDebit', icon: 'bi-bar-chart-steps', documents: '' },
    { name: 'transaction', icon: 'bi-arrow-left-right', documents: '' },
    { name: 'transfer', icon: 'bi-box-arrow-up-right', documents: '' },
    { name: 'transfer_by_login', icon: 'bi-person-check', documents: '' },
    { name: 'users', icon: 'bi-people', documents: '' }
  ];

  get totalDocuments(): number {
    return this.collectionStats.reduce((total, stat) => total + (stat.count || 0), 0);
  }

  openModal() {

    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;

  }

  openAuthModal() {

    this.authModal.set(true) ;
  }

  closeAuthModal() {
    this.authModal.set(false) ;

  }


  protected readonly allIcons = allIcons;


  protected readonly companyName = companyName;
}

