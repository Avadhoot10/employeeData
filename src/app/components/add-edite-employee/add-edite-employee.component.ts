import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edite-employee',
  templateUrl: './add-edite-employee.component.html',
  styleUrls: ['./add-edite-employee.component.css']
})
export class AddEditeEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,  ) { }
  empForm!: FormGroup;

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
    })
  }
  onFormSubmit(){
    console.log(this.empForm);
    
  }

}
