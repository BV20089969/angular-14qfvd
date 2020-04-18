import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from "../employee.service";

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
employee: Employee;
    constructor(private empService: EmployeeService) { }

  ngOnInit()
    {
    this.employee=this.empService.getData();
    }
}