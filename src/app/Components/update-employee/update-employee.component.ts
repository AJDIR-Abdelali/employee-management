import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  @Input() employee: any;
  @Output() updateCompleted = new EventEmitter<void>();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
      alert('Employee updated successfully!');
      this.updateCompleted.emit();
    });
  }
}
