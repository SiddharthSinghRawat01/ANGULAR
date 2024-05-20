import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  onSearch() {
    console.log("onSearch call");
    this.search.emit(this.text);
  }

  text =""

}
