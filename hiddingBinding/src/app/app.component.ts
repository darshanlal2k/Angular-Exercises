import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hiddingBinding';
  events :any = [
    { name: 'Angular Connect', date: '9/26/2036', time: '10am', location: { address: '1 London Road ', city: 'London', country: 'England' } },
    { name: 'ng-conf 2037', date: '4/15/2037', time: '9am', location: { address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA' } },
    { name: 'UN Angular Summit', date: '6/10/2037', time: '8am', location: { address: 'The UN Angular Center', city: 'New York', country: 'USA' }, onlineUrl: 'http://unangularsummit.org' }
  ]
  // a: any = "true";
  // hideShow() {
  //   this.a = !this.a;
  // }
}
