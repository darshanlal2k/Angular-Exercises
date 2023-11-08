import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from './../services/user-services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-records-details',
  templateUrl: './user-records-details.component.html',
  styleUrls: ['./user-records-details.component.css']
})
export class UserRecordsDetailsComponent {
  userDetails: any;
  heading: string = "Event Details";
  constructor(public userService: UserServicesService, public activateRoute: ActivatedRoute) { }
  ngOnInit() {
    this.userDetails = this.userService.getEvent( +this.activateRoute.snapshot.params['recordId']);
  }

}
