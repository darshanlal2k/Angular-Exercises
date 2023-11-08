import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'outputDecorator';
  counterNumber: any;
  counterGenerated(event: any) {
    this.counterNumber = event;
  }
}
