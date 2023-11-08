import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export default class ParentComponent {
  textParent: string = 'darshan';
  testingParent : string = 'Testing Parent is Working';
  @Input() testChild :any;

  eventParent = {name:'ngConf 2025', date: '3/1/2025', time: '8am', location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}}
}
