import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  event: string = "Event";
  date: string = "Date";
  time: string = "Time";
  address: string = "Address";

  events = [{ id: 1, name: 'Angular Connect', date: '9/26/2036', time: '10am', location: { address: '1 London Rd', city: 'London', country: 'England' } }
  ]
  getData: any;
  objtValue: any;
  constructor(private activateroute: ActivatedRoute, private router: Router) {


  }
  ngOnInit(): void {
    this.activateroute.queryParams.subscribe((params: any) => {
      console.log(params);
      this.getData = params.data;
      console.log(this.getData);
      this.objtValue = JSON.parse(this.getData);
      console.log(this.objtValue);
      this.events.push(this.objtValue);
    })

  }
}
