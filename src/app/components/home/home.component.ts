import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  company: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', email: "1.0079", company: 'H'},
  
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'email', 'company', 'Action'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }
  openEditForm(data:any){}
  deleteEmployee(emailId:any){}

}
