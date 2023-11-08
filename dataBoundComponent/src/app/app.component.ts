import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Congratulations!';
  subtitle: string = 'You got your component to display!';
  question: string = 'How does your event look below?';

  // answers = [
  //   { config: 'ngConf 2025' },
  //   { date: '3/1/2025' },
  //   { time: '8am' },
  //   {
  //     address: [
  //       { street: '123 Main St' },
  //       { city: 'Salt Lake City' },
  //       { state: 'UT' },
  //       { country: 'USA' }
  //     ]
  //   }
  // ];
  dataBound = { name: 'ngConf 2025', date: '3/1/2025', time: '8am', location: { address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA' } };
}
