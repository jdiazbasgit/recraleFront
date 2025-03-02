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
  fecha: Date ;
  constructor(private service: EmployeeService) {
    this.accesos = new Array<Acceso>();
    this.accesosNuevos = new Array<AccesoNuevo>();
    this.fecha = new Date();
  }

  getAccesos() {
    this.service.dameDatos("http://localhost:8081/accesos").subscribe((response) => {
      let accesos = response as Array<Acceso>;
      
      this.accesosNuevos = new Array<AccesoNuevo>();
   let fecha=accesos[0].fecha;
      let accesosNuevo: AccesoNuevo;
      let primeraVez: boolean = false;
      //alert("al entrar:"+accesos.length);
      accesos.forEach(acceso => {
        if (acceso.tipo === 1 ) {
          accesosNuevo = new AccesoNuevo(acceso.empleado, acceso.fecha, acceso.horaReal, acceso.minutoReal, 0, 0, "nada");
          //primeraVez = true;
          this.accesosNuevos.push(accesosNuevo);
          //accesosNuevo.clase = "bg-danger";
        }
        if (acceso.tipo === 2) {
          accesosNuevo.horaRealSalida = acceso!.horaReal;
          accesosNuevo.minutoRealSalida = acceso!.minutoReal;
         // primeraVez = false;
         
        }
        if (accesosNuevo.horaRealSalida === 0 && accesosNuevo.minutoRealSalida === 0 ) {
          accesosNuevo.clase = "bg-danger";
          //primeraVez = false;
         
        }
        else
          accesosNuevo.clase = "nada";
        //if ( fecha===acceso.fecha && !primeraVez) {
          
          
       // }
       // fecha = acceso.fecha;

      })
      //alert("al salir:"+this.accesosNuevos.length);
      this.accesosNuevos.sort(function (a, b) {
        if (a.fecha > b.fecha) return -1;
        if (a.fecha < b.fecha) return 1;
        return 0;
      })
      //this.fecha=accesos[0].fecha;
    });
  }
  getAccesosByFecha(fecha: Date) {
    {
      this.service.dameDatos(`http://localhost:8081/accesos/${fecha}`).subscribe((response) => {
        this.accesos = response as Array<Acceso>;
      });
    }

  }
  cambiaFecha(accesoNuevo: AccesoNuevo) {
    this.fecha=accesoNuevo.fecha;
    }
  ngOnInit() {
    this.getAccesos();
  }
}

