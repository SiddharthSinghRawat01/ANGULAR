import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule,RouterLink],
  /* to use singe file component we delete the html css file and insted of
  templateUrl and styleUrl we will use template and style */
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
  // template: `
  //  <mat-toolbar color="primary" routerLink="/">
  //   <button mat-icon-button  >
  //     <mat-icon>home</mat-icon>
  //   </button>
  //   <span>My Product Management</span>
  // </mat-toolbar>
  // `,
  // styles: ``
})
export class HeaderComponent {

}
