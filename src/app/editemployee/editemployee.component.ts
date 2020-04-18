import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from "../employee.service";
import { FormGroup, FormControl ,FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
 userFormGroup: FormGroup;
  constructor(private dataservice:EmployeeService,private fb:FormBuilder,
  private router:Router,private _location: Location) { }
  

  backClicked() {
    this._location.back();
  }
  employee:Employee;
    ngOnInit() {
     this.employee=this.dataservice.getData();
    this.userFormGroup = this.fb.group(
      {
        name : new FormControl(this.employee.name),
        location : new FormControl(this.employee.location),
        email : new FormControl(this.employee.email),
        mobile : new FormControl(this.employee.mobile)
      },
    );
    
  }
  redirect() {
    this.router.navigate(['./employees']);
  }
  empl:Employee=this.dataservice.getData();
  idtoUpdate = this.empl.id;

  updateEmployee() {
    
    this.dataservice.getUser(this.idtoUpdate).subscribe(data => {
      this.empl = data;
  
     this.empl.name = this.userFormGroup.controls['name'].value;
     this.empl.location = this.userFormGroup.controls['location'].value;
     this.empl.email = this.userFormGroup.controls['email'].value;
     this.empl.mobile = this.userFormGroup.controls['mobile'].value;

    
     this.dataservice.updateEmployee(this.empl).subscribe(data1 => {
        this.redirect();
      });
     
    });
    
  }

}
   