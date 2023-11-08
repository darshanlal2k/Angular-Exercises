import { Component } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
  constructor(public eventService: EventService) {
  }
  events = this.eventService.getEvents();
}
