import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private activateRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {

  }
  userDetails(userData: any) {
    // console.log(userData);
    this.router.navigate(['/'], { queryParams: {data : JSON.stringify(userData)} });
  }
  cancel() {
    this.router.navigate(['']);
  }
}
