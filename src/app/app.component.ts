//app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  showUserDetails: boolean;
  btnText: string;

  constructor() {
    this.name = '';
    this.showUserDetails = false;
    this.btnText = 'Show';
  }

  toggleUserDetails() {
    this.showUserDetails = !this.showUserDetails;
    this.btnText = this.showUserDetails ? 'Hide' : 'Show';
  }
}
