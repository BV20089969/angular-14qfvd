import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { EmployeelistComponent } from '../employeelist/employeelist.component';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { BasicComponent }  from '../basic/basic.component';
import { EmployeedetailsComponent } from '../employeedetails/employeedetails.component';
import { EditemployeeComponent } from '../editemployee/editemployee.component'


const routes: Routes = [
  { path: '', component: BasicComponent },
  { path: 'employees', component: EmployeelistComponent },
  { path: 'addemployee', component: AddemployeeComponent },
  { path: 'employeeDetails', component: EmployeedetailsComponent },
  { path: 'editEmployee', component: EditemployeeComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }



