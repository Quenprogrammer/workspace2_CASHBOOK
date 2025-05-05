import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private _isValue = new BehaviorSubject('');

  isValue$ = this._isValue.asObservable();

  setValue(value: string): void {
    this._isValue.next(value);
  }

  toggleValue(): void {
    this._isValue.next(this._isValue.value);
  }


}
