import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  deleteEmployee(id: any) {
    return this._http.delete(`http://localhost:3000/employee/${id}`);
  }
 
  constructor(private _http: HttpClient) {}

  addEmployee(value: any) : Observable<any>{
    return this._http.post(" http://localhost:3000/employee",value);
  }
  updateEmployee(id: any, value: any) {
    return this._http.put(`http://localhost:3000/employee/${id}`,value);
  }
  getEmployeeList() : Observable<any>{
    return this._http.get(" http://localhost:3000/employee");
  }

}
