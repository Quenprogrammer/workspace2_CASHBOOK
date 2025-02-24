import {Component, inject, TemplateRef} from '@angular/core';
import {
  NgbDropdown,
  NgbDropdownAnchor,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbOffcanvas, OffcanvasDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {AimsTagComponent} from '../aims-tag/aims-tag.component';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    NgbDropdownAnchor,
    NgbDropdown,
    NgbDropdownMenu,
    RouterLink,
    NgbDropdownItem,
    NgIf,
    AimsTagComponent
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  hiddenRoutes: string[] = ['/portal', '/staff-login', '/student-login']; // Add any other routes here
  closeResult = '';

  private offcanvasService = inject(NgbOffcanvas);
  private router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe(event => {
      this.offcanvasService.dismiss("Due to navigation");
      // Perform actions you want to execute on route change
      // console.log('Route changed:', event.url);
    });
  }

  isFooterHidden(): boolean {
    return this.hiddenRoutes.includes(this.router.url);
  }

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title', scroll: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case OffcanvasDismissReasons.ESC:
        return 'by pressing ESC';
      case OffcanvasDismissReasons.BACKDROP_CLICK:
        return 'by clicking on the backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
