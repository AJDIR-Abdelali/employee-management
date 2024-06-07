import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: any = {};

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.employeeService.createEmployee(this.employee).subscribe(() => {
      alert('Employee created successfully!');
    });
  }
}
