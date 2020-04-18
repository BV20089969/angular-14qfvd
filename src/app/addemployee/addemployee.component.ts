import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule ,FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
 emp = {} as Employee;
 userFormGroup: FormGroup;

  constructor(private empService: EmployeeService,private router:Router,private _location: Location,private fb:FormBuilder) { }

  ngOnInit() {
     this.userFormGroup = this.fb.group(
      {
        name : new FormControl(""),
        location : new FormControl(""),
        email : new FormControl(""),
        mobile : new FormControl("")
      },
    );
    }
 backClicked() {
    this._location.back();
  }
  addEmployee(){
    console.log(this.emp);
     this.emp.name = this.userFormGroup.controls['name'].value;
     this.emp.location = this.userFormGroup.controls['location'].value;
     this.emp.email = this.userFormGroup.controls['email'].value;
     this.emp.mobile = this.userFormGroup.controls['mobile'].value;
    if(this.emp!=null)
    {
    this.empService.createEmployee(this.emp);
    this.redirect();
    }
  }
  redirect() {
    this.router.navigate(['./employees']);
  }

}