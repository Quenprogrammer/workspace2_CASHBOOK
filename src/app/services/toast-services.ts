import { Injectable, TemplateRef } from '@angular/core';
export  type  ToastType='success'|'danger'|'info';

export interface Toast {
  header:string;
  body:string;
  delay?: number;
  type:ToastType
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Toast[] = [];

  show(header:string, body:string, toastType:ToastType) {
    this.toasts.push({header,body, type:toastType} );
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
