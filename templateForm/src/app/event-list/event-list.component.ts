import { Component } from '@angular/core';
import { TempFormService } from '../services/temp-form.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  constructor( public tempFormService : TempFormService) {  }

  events = this.tempFormService.getEVENTS();
}
