import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { BackupService } from '../../../services/backup.service';
import {DataServiceService} from '../../../services/dataService';
import {GetCollectionCountService} from '../../../services/get-collection-count.service';
import {NgForOf, NgIf} from '@angular/common';
import {allIcons} from '../../../../../public/icons/icons';
import {RouterLink} from '@angular/router';
import {companyName} from '../companyInformation';
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
    RouterLink
  ],
  templateUrl: './backup.component.html',
  styleUrl: './backup.component.css'
})
export class BackupComponent implements OnInit {
  isModalOpen=false
  constructor(private firestoreService: DataServiceService,private getDocs: GetCollectionCountService) {}

  ngOnInit(): void {
    this.getDocs.getCountsForCollections(this.collectionsToCheck).subscribe(stats => {
      this.collectionStats = stats;
    });
  }
  collectionStats: { name: string, count: number,  }[] = [];
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


  collectionsDetails:collectionsDataInterface[]=[
    {name:'Logs', icon: 'bi-person-circle' , documents:''      /*login*/},
    {name:'Logs', icon: 'bi-clock'   /*logs*/ , documents:''},
    {name:'Users',icon: 'bi-globe'  /*users*/ , documents:''},
    {name:'Configuration',icon: 'bi-tools' /*configs*/ , documents:''},
    {name:'Accounts',icon: 'bi-currency-exchange' /*accounts*/, documents:''},
    {name:'Transactions',icon: 'bi-arrow-repeat' /*transactiom*/, documents:'' },


]

  openModal() {

    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;

  }



  protected readonly allIcons = allIcons;


  protected readonly companyName = companyName;
}


/* addLogTrack(): void {
   const now = new Date();
   const logTrack = {
     date: now.toLocaleDateString(),  // e.g., "17/04/2025"
     time: now.toLocaleTimeString(),  // e.g., "10:34:56 AM"
     action: 'Data Backup',
     user: 'admin',

   };

   this.firestoreService.addData('logs', logTrack)
     .then(() => console.log('LogTrack saved to Firestore'))
     .catch(error => console.error('Error saving LogTrack:', error));
 }*/
