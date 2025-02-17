import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService implements OnDestroy {
  private onlineStatus = new BehaviorSubject<boolean>(navigator.onLine);

  constructor() {
    // Event listeners for online/offline status changes
    window.addEventListener('online', () => this.updateOnlineStatus(true));
    window.addEventListener('offline', () => this.updateOnlineStatus(false));
  }

  private updateOnlineStatus(status: boolean): void {
    this.onlineStatus.next(status);
  }

  getOnlineStatus(): Observable<boolean> {
    return this.onlineStatus.asObservable();
  }

  // Cleanup event listeners on destroy to prevent memory leaks
  ngOnDestroy(): void {
    window.removeEventListener('online', () => this.updateOnlineStatus(true));
    window.removeEventListener('offline', () => this.updateOnlineStatus(false));
  }
}
