import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../clases/Employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
eliminarEmpleado(arg0: any) {
throw new Error('Method not implemented.');
}
editarEmpleado(arg0: any) {
throw new Error('Method not implemented.');
}

  empleados: any[] ;

  constructor(private service:EmployeeService) {
    this.empleados = [];
   }

  ngOnInit(): void {
    this.service.getEmployees("http://localhost:8081/getEmpleados").subscribe((data:any) => {
      this.empleados = data as Employee[];
    });
  }
}
