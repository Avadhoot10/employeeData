import { Component, OnInit } from '@angular/core';
import{MatDialog}from'@angular/material/dialog'
import { AddEditeEmployeeComponent } from '../add-edite-employee/add-edite-employee.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }
  openAddEditeForm(){
    this.matDialog.open(AddEditeEmployeeComponent)
  }

}
