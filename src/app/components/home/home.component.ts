import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AddEditeEmployeeComponent } from '../add-edite-employee/add-edite-employee.component';
import { EmployeeService } from 'src/app/shared/employeeService/employee.service';
import { log } from 'console';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

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

  constructor(
    private _dialog: MatDialog,
    private employeeService: EmployeeService
  ) { }
  displayedColumns: string[] = ['position', 'name', 'email', 'company', 'Action'];
  dataSource:any = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getEmployeeList();
  }
  getEmployeeList(){
    this.employeeService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
  openEditForm(data:any){
    const dialogRef = this._dialog.open(AddEditeEmployeeComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }
  deleteEmployee(emailId:any){
    
  }

}
