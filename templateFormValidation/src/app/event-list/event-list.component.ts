import { Component } from '@angular/core';
import { TempFormValidService } from '../services/temp-form-valid.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  constructor(public tempFormValid : TempFormValidService) {}

  events = this.tempFormValid.getEVENTS()
}
