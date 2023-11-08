import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  genders = ['male', 'female'];
  constructor(private formService: FormService) {

  }
  uservalues: FormGroup = new FormGroup({

  });
  onSubmit(userData: any) {
    console.log(userData);
  }
}
