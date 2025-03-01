import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../clases/Employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employee: Employee | undefined;
  empleados: Array<Employee>;
  mensaje: string | undefined

  constructor(private service: EmployeeService) {
    this.empleados = [];
    this.employee = new Employee(0, "", "", "", "", "", "");

  }

  
  seleccionarEmpleado(arg0: Employee) {
    this.employee = arg0;
  }
  limpiarEmpleado() {
    this.employee = new Employee(0, "", "", "", "", "", "");
    this.mensaje=""
  }
  eliminarEmpleado(arg0: Employee) {
    this.service.borraDatos("http://localhost:8081/empleado", arg0).subscribe({
      next: (response:any) => {
        this.mensaje = "EMPLEADO ELIMINADO CORRECTAMENTE"
        this.empleados!.splice(this.empleados!.indexOf(arg0), 1);
      },
      error: any => {
        this.mensaje = "ERROR EN LA ELIMINACION DEL EMPLEADO"
      }
  })
  }

  editarEmpleado(arg0: Employee) {
    let employee: Employee = arg0;


    
      this.service.grabaDatos("http://localhost:8081/grabaEmpleado", employee).subscribe( {
        next: (response:any) => {
          this.mensaje = "EMPLEADO GRABADO CORRECTAMENTE"
         
        },
        error: any => {
          this.mensaje = "ERROR EN LA GRABACION DEL EMPLEADO"
        }
      })
    
  }
  altaEmpleado(arg0: Employee) {
    this.employee = arg0;


   
      this.service.grabaDatos("http://localhost:8081/grabaEmpleado", this.employee).subscribe({
        next: (response:any) => {
          this.mensaje = "EMPLEADO GRABADO CORRECTAMENTE"
         this.empleados?.push(response)
        },
        error: any => {
          this.mensaje = "ERROR EN LA GRABACION DEL EMPLEADO"
        }
       
      })
   
  }
  ngOnInit(): void {
    this.service.dameDatos("http://localhost:8081/getEmpleados").subscribe((data: any) => {
      this.empleados = data as Employee[];
    });
  }
}
