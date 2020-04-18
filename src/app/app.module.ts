import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { RoutingModule } from './routing/employeerouting.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { BasicComponent } from './basic/basic.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { FilterPipe } from './filter.pipe';
import { EditemployeeComponent } from './editemployee/editemployee.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, RoutingModule,HttpClientModule,InMemoryWebApiModule.forRoot(DataService)],
  declarations: [ AppComponent, EmployeelistComponent, AddemployeeComponent, BasicComponent, EmployeedetailsComponent, FilterPipe, EditemployeeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService, DataService]
})
export class AppModule { }
