import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  numberOfEmps: number;
  employees:any;
  selectedEmployee: any;

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();   
  }

//Getting all the employees from DB to the Table
  getEmployees():void {
    this.empService.getEmployees()
    .subscribe(employees => {this.employees = employees});
     console.log(this.employees);
  
  }

//Selecting particular Employee to display the Details
   onClick(emp: Employee){
    this.selectedEmployee = emp;
    console.log("this: "+this.selectedEmployee);
    this.empService.onClick(emp);
  }

//Deleting Employee from table
  deleteEmployee(em:number) {
    this.empService.deleteemp(em).subscribe(data => {
       this.getEmployees();
    });
  }

}