import { Component } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  // events: any
  constructor(public eventService: EventService) { }
  ngInOnit() {
    // this.events = this.eventService.getEvents();
  }
  events = this.eventService.getEvents();
}
