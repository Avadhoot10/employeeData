import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/shared/coreService/core.service';
import { EmployeeService } from 'src/app/shared/employeeService/employee.service';


@Component({
  selector: 'app-add-edite-employee',
  templateUrl: './add-edite-employee.component.html',
  styleUrls: ['./add-edite-employee.component.css']
})
export class AddEditeEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,
     @Inject(MAT_DIALOG_DATA) public data: any, 
     private _empService:EmployeeService,
     private _dialogRef: MatDialogRef<AddEditeEmployeeComponent>,
     private coreService: CoreService) { }
  empForm!: FormGroup;
  
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  ngOnInit(): void {
    this.empForm= this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      education: ['',[Validators.required]],
      company: ['',[Validators.required]],
      experience: ['',[Validators.required]],
      package: ['',[Validators.required]],
    });
    this.empForm.patchValue(this.data);
  }
  onFormSubmit(){
    console.log(this.empForm);
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
             this.coreService.openSnackBar('Employee detail updated!');
             console.log(val);
             
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
     } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this.coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
     }
    }
  }

}
