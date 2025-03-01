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

}
