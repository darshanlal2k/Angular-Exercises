import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .top{ margin-top : 20px}
  .left {margin-left : 15px}
  .outer {display : inline-block}
  `]
})
export class AppComponent {
  title = 'style';
  event = { name: 'ngConf 2025', date: '3/1/2025', time: '8am', location: { address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA' } }

}
