import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(value: any) : Observable<any>{
    return this._http.post(" http://localhost:3000/employee",value);
  }
  updateEmployee(id: any, value: any) {
    throw new Error('Method not implemented.');
  }

}
