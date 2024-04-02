import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  /* to use singe file component we delete the html css file and insted of
  templateUrl and styleUrl we will use template and style */
  // templateUrl: './header.component.html',
  // styleUrl: './header.component.scss'
  template: `
  <h2 bg-green-500> Hello from header</h2>
  `,
  styles: ``
})
export class HeaderComponent {

}
