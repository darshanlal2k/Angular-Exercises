import { Router } from '@angular/router';
import { TempFormValidService } from './../services/temp-form-valid.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  constructor(private tempFormValidService: TempFormValidService, private router: Router) {

  }
  cancel() {
    this.router.navigate(['']);
  }
  userDetails(userValues: any) {
    
    this.tempFormValidService.addrow(userValues);
    this.router.navigate(['']);
  }
}
