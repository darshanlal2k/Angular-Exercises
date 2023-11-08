import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;
  educations: string[] = ['Matriculation', 'Diploma', 'Intermediate', 'Graduate', 'Post Graduate'];
  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      companyName: '',
      experience: '',
      package: '',
    })
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        console.log(this.empForm.value);
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (value: any) => {
            // alert('Employee Details Updated!');
            this._coreService.openSnackBar('Employee Details Updated!','done');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        })
      }
      else {
        console.log(this.empForm.value);
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (value: any) => {
            // alert('Employee Added Successfully');
            this._coreService.openSnackBar('Employee Details Updated!','done');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        })
      }
    }
  }
}
