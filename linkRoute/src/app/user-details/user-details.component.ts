import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  eventDetails: any;
  constructor(public eventService: EventService, public activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.eventDetails = this.eventService.getEvent(+this.activateRoute.snapshot.params['eventId']);
  }
}
