import { EventService } from './services/event.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'createRoute';
  constructor(public eventService:EventService) {  }

  events = this.eventService.getEvents();
}
