import { Component } from '@angular/core';
import { Jornada } from 'src/clases/Jornada';


import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-jornadas',
  templateUrl: './jornadas.component.html',
  styleUrls: ['./jornadas.component.css']
})
export class JornadasComponent {
  jornada: Jornada | undefined;
  jornadas: Array<Jornada> | undefined;
  mensaje: string | undefined

  constructor(private service: EmployeeService) {
    this.jornadas = [];
    this.jornada = new Jornada(0, "", "", "", "", "", "", 0);

  }

  seleccionarJornada(jornada: Jornada) {
    this.jornada = jornada;
  }
  limpiaJornada() {
    this.jornada = new Jornada(0, "", "", "", "", "", "", 0);
    this.mensaje=""
  }
  eliminarJornada(arg0: Jornada) {

    this.service.borraDatos("http://localhost:8081/jornada", arg0).subscribe({
      next: (response:any) => {
        this.mensaje = "JORNADA ELIMINADA CORRECTAMENTE"
        this.jornadas!.splice(this.jornadas!.indexOf(arg0), 1);
      },
      error: any => {
        this.mensaje = "ERROR EN LA ELIMINACION DE LA JORNADA"
      }
  })


  }

  editarJornada(arg0: Jornada) {
    let jornada: Jornada = arg0;
    console.log(JSON.stringify(jornada))
   
      this.service.grabaDatos("http://localhost:8081/grabaJornada", jornada).subscribe( {
        next: (response:any) => {
        
          this.mensaje = "JORNADA GRABADA CORRECTAMENTE"
          
        },
        error: any => {
          this.mensaje = "ERROR EN LA GRABACION DE LA JORNADA"
        }
      })
    
  }
  altaJornada(jornada: Jornada) {
    // this. jornada = new  Jornada(0, "", "", "c", "", "", "");
    if (jornada.descripcion.length === 0) {
      this.mensaje = "CAMPO DESCRIPCION ES OBLIGATORIO"
      return;
    }

   
      this.service.grabaDatos("http://localhost:8081/grabaJornada", this.jornada).subscribe( {
        next: (response:any) => {
        
          this.mensaje = "JORNADA GRABADA CORRECTAMENTE"
          this.jornadas?.push(response)
        },
        error: any => {
          this.mensaje = "ERROR EN LA GRABACION DE LA JORNADA"
        }
      })
   
  }
  ngOnInit(): void {
    this.service.dameDatos("http://localhost:8081/jornadas").subscribe((data: any) => {
      this.jornadas = data as Jornada[];
    });
  }
}
