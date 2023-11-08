import { Router } from '@angular/router';
import { TempFormService } from './../services/temp-form.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  constructor(public tempFormService: TempFormService, public router : Router) {

  }
  saveForm(event: any) {
    console.log(event);
    this.tempFormService.pushEVENTS(event);
    this.router.navigate(['']);
  }
  cancel(){
    this.router.navigate(['']);
  }
}
