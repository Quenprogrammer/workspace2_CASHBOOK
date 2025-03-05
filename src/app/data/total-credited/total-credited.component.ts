import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TotalsService} from '../../services/Cumulative/totals.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AsyncPipe, CurrencyPipe, KeyValuePipe, NgForOf, NgIf, TitleCasePipe} from '@angular/common';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
interface FirebaseDocument {
  [key: string]: any; // Allows dynamic keys
}
@Component({
  selector: 'app-total-credited',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    KeyValuePipe,

    NgForOf,
    CurrencyPipe
  ],
  templateUrl: './total-credited.component.html',
  styleUrl: './total-credited.component.css'
})
export class TotalCreditedComponent implements OnInit{
  documents: FirebaseDocument[] = [];

  constructor(private firestoreDataService: TotalsService) {}

  ngOnInit(): void {
    this.firestoreDataService.documents$.subscribe(data => {
      this.documents = data;
    });
  }
}
