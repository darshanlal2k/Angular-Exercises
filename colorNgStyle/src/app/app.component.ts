import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colorNgStyle';
  events = [
    { name: 'Angular Connect', date: '9/26/2036', time: '10am', location: { address: '1 London Road ', city: 'London', country: 'England' }, format: "InPerson" },
    { name: 'ng-conf 2037', date: '4/15/2037', time: '9am', onlineUrl: 'https://www.ng-conf.org/', format: "Online" },
    { name: 'Future Conf (Location/Url TBD)', date: '6/10/2037', time: '8am' },
    { name: 'UN Angular Summit', date: '6/10/2037', time: '8am', location: { address: 'The UN Angular Center', city: 'New York', country: 'USA' }, format: "InPerson" }
  ]
  titleColor(titleName: any) {
    if (titleName === "InPerson") {
      return {color : "green"}
    }
    else if (titleName === "Online") {
      return {color : "red"}
    }
    else {
      return {color : "grey"}
    }
  }
}
