import { Component } from '@angular/core';
import { ReactFormService } from '../services/react-form.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  constructor(private reactForm: ReactFormService, private router: Router) {

  }
  reactiveForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    location: new FormGroup({
      address: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
    }),
  })

  cancel() {
    this.router.navigate(['']);
  }
  userDetails(userValues: any) {
    this.reactForm.addRow(userValues);
    this.router.navigate(['']);
  }
}
