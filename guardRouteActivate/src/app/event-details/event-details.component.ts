import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  events: any;
  constructor(public eventService: EventService, public activateRoute: ActivatedRoute, public router : Router) {

  }
  ngOnInit() {
    this.events = this.eventService.getEvent(+this.activateRoute.snapshot.params['event.id'])
  }
}
