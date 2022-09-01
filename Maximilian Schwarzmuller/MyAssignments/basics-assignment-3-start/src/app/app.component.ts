import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  secretPassword = 'tuna';
  secretPasswordStatus = true;
  message = 'Display Details';
  click = [];
  temp = 0;
  onShowDetails() {
    this.secretPasswordStatus = this.secretPasswordStatus ? false : true;
    this.message = this.secretPasswordStatus ? 'Display Details' : 'Hide Details';
    this.click.push(++this.temp);
  }
}
