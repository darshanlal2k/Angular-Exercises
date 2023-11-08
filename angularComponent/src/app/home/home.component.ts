import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Angular Course';

  amount = 2;

  currentDate = new Date();

  percentage = 0.482;

  jsonObj = {
    "name": "AngularCourse Full"
  }
  sgdtoinrRate = 60.78;

}
