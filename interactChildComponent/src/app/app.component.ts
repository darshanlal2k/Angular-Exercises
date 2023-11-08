import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interactChildComponent';
  countingNumber : any;
  testingParent(event: any) {
    this.countingNumber = event;
  }

}
