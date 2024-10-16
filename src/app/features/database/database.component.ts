import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-database',
  standalone: true,
  imports: [

    RouterLink,

  ],
  templateUrl: './database.component.html',
  styleUrl: './database.component.scss'
})
export class DatabaseComponent {

}
