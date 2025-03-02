import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { AccesoNuevo } from 'src/clases/AccesoNuevo';
import { Acceso } from 'src/clases/Acceso';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css']
})
export class ListadosComponent {
  accesos: Array<Acceso>
  accesosNuevos: Array<AccesoNuevo>
  constructor(private service: EmployeeService) {
    this.accesos = new Array<Acceso>();
    this.accesosNuevos = new Array<AccesoNuevo>();
  }

  getAccesos() {
    this.service.dameDatos("http://localhost:8081/accesos").subscribe((response) => {
      let accesos = response as Array<Acceso>;
      this.accesosNuevos = new Array<AccesoNuevo>();
      let dni = "";
      let accesosNuevo: AccesoNuevo;
      accesos.forEach(acceso => {
        if (acceso.tipo === 1)
          accesosNuevo = new AccesoNuevo(acceso.empleado, acceso.fecha, acceso.horaReal, acceso.minutoReal, 0, 0, "nada");
        else {
          accesosNuevo.horaRealSalida = acceso.horaReal;
          accesosNuevo.minutoRealSalida = acceso.minutoReal;

        }
        if (accesosNuevo.horaRealSalida === 0 && accesosNuevo.minutoRealSalida === 0)
          accesosNuevo.clase = "bg-danger";
        else
          accesosNuevo.clase = "nada";
        this.accesosNuevos.push(accesosNuevo);
        dni = acceso.empleado.dni;
      })
      this.accesosNuevos.sort(function (a, b) {
        if (a.fecha > b.fecha) return -1;
        if (a.fecha < b.fecha) return 1;
        return 0;
      })
    });
  }
  getAccesosByFecha(fecha: Date) {
    {
      this.service.dameDatos(`http://localhost:8081/accesos/${fecha}`).subscribe((response) => {
        this.accesos = response as Array<Acceso>;
      });
    }

  }
  ngOnInit() {
    this.getAccesos();
  }
}

