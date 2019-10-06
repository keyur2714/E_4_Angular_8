import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employee.model';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers : [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  empList : Employee[] = [];
  names : string[] = [];

  constructor(private employeeService : EmployeeService,private loggingService : LoggingService) { 
    this.loggingService.logInfo("Employee List Component Object Created...");
  }

  ngOnInit() {
    //this.empList = this.employeeService.getEmployees();
    this.employeeService.getEmployeesWithObservable().subscribe(
      (data : Employee[])=>{
        this.empList = data;
      },
      (error)=>{

      }
    )

    this.employeeService.getNamesObservable().subscribe(
      (names : string[])=>{
        this.names = names;
      }
    )

  }

}
