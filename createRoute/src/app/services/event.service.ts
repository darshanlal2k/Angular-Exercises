import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  event: string = "Event";
  date: string = "Date";
  time: string = "Time";
  address: string = "Address";
  heading : string = "All of the events should show below";
  constructor() { }
  getEvents(){
    return [
      { name: 'Angular Connect', date: '9/26/2036', time: '10am', location: { address: '1 London Road ', city: 'London', country: 'England' } },
      { name: 'ng-nl', date: '4/15/2037', time: '9am', location: { address: '127 DT ', city: 'Amsterdam', country: 'TL' } },
      { name: 'ng-conf 2037', date: '4/15/2037', time: '9am', location: { address: 'The Palatial America Hotel, ', city: 'Salt Lake City', country: 'USA' } },
      { name: 'UN Angular Summit', date: '6/10/2037', time: '8am', location: { address: 'The UN Angular Center', city: 'New York', country: 'USA' } }
    ]
  }
}
