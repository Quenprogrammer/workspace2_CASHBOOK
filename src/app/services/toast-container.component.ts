import { Component, inject } from '@angular/core';

import { ToastService } from './toast-services';
import {NgClass, NgTemplateOutlet} from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [NgbToastModule, NgTemplateOutlet, NgClass],
  template: `
		@for (toast of toastService.toasts; track toast) {
			<ngb-toast
        [header]="toast.header"
				[ngClass]="toast.type==='success'?'bg-success text-light':toast.type==='danger'? 'bg-danger text-light':''"
				[autohide]="true"
				[delay]="toast.delay || 5000"
				(hidden)="toastService.remove(toast)"
			>
				{{toast.body}}
			</ngb-toast>
		}
	`,
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToastsContainer {
  toastService = inject(ToastService);
}
