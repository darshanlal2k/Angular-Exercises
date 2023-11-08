import { Component } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events : any;
  constructor(public eventService: EventService) {

  }
  ngOnInit(){
    this.events = this.eventService.getEvents();
  }


}
