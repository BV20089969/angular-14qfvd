import { Injectable, Output, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Employee } from "./employee";
import { Observable,throwError,of } from "rxjs";
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class EmployeeService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  employees: Employee[] = [];
  public nemp:Employee ={ id: 1, name: '', location:'',email:'', mobile:91}; 
  private empUrl = "api/employees"; 

  constructor(private httpClient: HttpClient) { }


 //Created a function to handle and log errors, in case
  private handleError(error: any) {
    console.error(error);                                      
    return throwError(error);
  }

//Service used to create a new employee 
  public createEmployee(employee: Employee) {
      this.httpClient.post(this.empUrl,
        {
         "name": employee.name,
         "location": employee.location,
         "email": employee.email,
         "mobile": employee.mobile
      })  
     .subscribe();
  }

//Generating a new ID based upon the employees adding
   generateId(emps: Employee[]): number {
    return emps[Object.keys(emps).length - 1].id + 1;
  }

//Getting employees from the database to employeelist component
   getEmployees() {
    return this.httpClient.get(this.empUrl);    
     
  }

  //It is used to display the data in employee details
  public getData()
  {
    return this.nemp;
  }

//By clicking particular id in displayed list the data is set to new employee
  public onClick(emp: Employee) {
    this.nemp.id=emp.id;
    this.nemp.name=emp.name;
    this.nemp.location=emp.location;
    this.nemp.email=emp.email;
    this.nemp.mobile=emp.mobile;
  }
  
  //Deleting the particular Employee from the Table
  deleteemp (id: number): Observable<Employee> {
  const url = `${this.empUrl}/${id}`;
  return this.httpClient.delete<Employee>(url, this.httpOptions).pipe(
    catchError(this.handleError)
  );
}


updateEmployee(employee: Employee): Observable<Employee>{
  const url = `${this.empUrl}/${employee.id}`;
  return this.httpClient.put<Employee>(this.empUrl, employee, this.httpOptions).pipe(
    map(() => employee),
    catchError(this.handleError)
  );
}
getUser(id: number): Observable<Employee> {
    const url = `${this.empUrl}/${id}`;
    return this.httpClient.get<Employee>(url).pipe(
    catchError(this.handleError)
    );
    }
}