import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  constructor(public eventService: EventService, public router: Router) {

  }
  userform: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/),Validators.minLength(3), Validators.maxLength(25)]),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    location: new FormGroup({
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    }),
  })

  get name(){
    return this.userform.get('name');
  }

  cancel() {
    this.router.navigate(['']);
  }
  userDetails(userValues: any) {
    this.eventService.addRow(userValues);
    this.router.navigate(['']);
  }

}
