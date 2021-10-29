import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '.././data/employee.service';
import { Employee } from '../data/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  //Data members
  private employees: Employee[];

  private getEmployeesSub;

  private loadingError: boolean = false;
  
  //Methods
  constructor(private e: EmployeeService) { }

  ngOnInit() {
    try {
    this.getEmployeesSub = this.e.getEmployees()
    .subscribe(
      employees => {this.employees = employees}
    );
    } catch (err) {
      this.loadingError = true;
    }
  }

  ngOnDestroy() {
    if (this.getEmployeesSub == null) {
      this.getEmployeesSub.unsubscribe();
    }
  }
}
