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


@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    NgbDropdownAnchor,
    NgbDropdown,
    NgbDropdownMenu,
    RouterLink,
    NgbDropdownItem,
    NgIf
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

}
