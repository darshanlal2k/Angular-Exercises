import { ReactFormService } from './../services/react-form.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  // events: any;
  constructor(public reactiveForm: ReactFormService) { }
  ngOnInit() {

  }
  events = this.reactiveForm.getEvents();
}
