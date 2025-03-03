import { Component } from '@angular/core';

import { Employee } from 'src/clases/Employee';
import { EmployeeService } from '../employee.service';
import { Jornada } from 'src/clases/Jornada';
import { EmployeeJournal } from 'src/clases/EmployeeJournal';

@Component({
  selector: 'app-empleadosjornada',
  templateUrl: './empleadosjornada.component.html',
  styleUrls: ['./empleadosjornada.component.css']
})
export class EmpleadosjornadaComponent {
  employeeJournals: EmployeeJournal[] = [];
  employees: Employee[] = [];
  journals: Jornada[] = [];
  selectedJournal: Jornada | null = null;
  selectedEmployee: Employee | null = null;
  searchEmployee: string = '';
  employeesFiltrados: Employee[] = [];
  selectedFechaInicio: Date | null = null;
  mostrarDropdownNuevoEmployeeJournal: boolean = false;
  mostrarModalNuevoEmployeeJournal: boolean = false;



  constructor(
    private  employeeService: EmployeeService,
    private  journalsService: EmployeeService,
    private  service: EmployeeService,
    
  ) { }

  ngOnInit() {
    this.getEmployeeJournalsOrganizados();
    this.getEmployeesOrganizados();
    this.getJournalsOrganizados();
    //this.cargarNuevoEmployeeJournalFormGroup();
  }

  getEmployeeJournalsOrganizados() {
    this.service.dameDatos("http://localhost/accesos1/empleadosJornada").subscribe((datos: any) => {
      this.employeeJournals = datos as Array<EmployeeJournal>;
      /*this.employeeJournals.sort((a, b) => {
        return a.employee!.apellidos.localeCompare(b.employee!.apellidos);
      });*/

    });
  }
  getEmployeesOrganizados() {
    this.employeeService.dameDatos("http://localhost/accesos1/empleados").subscribe({
      next: (datos: any) => {
        this.employees = datos;
        /*this.employees.sort((a, b) => {
          return a.apellidos.localeCompare(b.apellidos);
        })*/
      },
      error: (err: string) => {
        console.log("ERROR | getEmployees(): " + err);
      },
    })
  }

  getJournalsOrganizados() {
    this.journalsService.dameDatos("http://localhost/accesos1/jornadas").subscribe({
      next: (datos: any) => {
        this.journals = datos;
        this.journals.sort((a, b) => {
          return a.descripcion.localeCompare(b.descripcion);
        })
      },
      error: (err: string) => {
        console.log("ERROR | getJournals(): " + err);
      },
    })
  }

  /*cargarNuevoEmployeeJournalFormGroup() {
    this.nuevoEmpleadoForm = this.formBuilder.group({
      employee: [null, [Validators.required]],
      journal: [null, [Validators.required]],
      fechaInicio: [null, [Validators.required]],
    });
  }*/

  filtrarEmployees() {
    this.mostrarDropdownNuevoEmployeeJournal = true;
    let termino = this.searchEmployee.toLowerCase();
    if (termino == "") {
      this.employeesFiltrados = this.employees;
    } else {
      this.employeesFiltrados = this.employees.filter((employee) =>
        employee.apellidos.toLowerCase().includes(termino) || employee.nombre.toLowerCase().includes(termino)
      );
    }
  }

  seleccionarEmpleado(employee: Employee) {
    this.selectedEmployee = employee;
    this.searchEmployee = `${employee.apellidos} ${employee.nombre}`;
    //this.nuevoEmpleadoForm.get('employee')?.setValue(employee);
    this.employeesFiltrados = [];
    this.mostrarDropdownNuevoEmployeeJournal = false;
  }

  seleccionarJournal(journal: Jornada) {
    console.log("hey");
    this.selectedJournal = journal;
    //this.nuevoEmpleadoForm.get('journal')?.setValue(journal);
  }

  editarEmployeeJournal(datos: any) {
    this.service.grabaDatos("", datos).subscribe({
      next: (datos:any) => {
        this.employeeJournals = datos;
      },
      error: (err) => {
        console.log("ERROR | editarEmployeeJournal(): " + err);
      },
    });
  }

  /*agregarEmployeeJournal() {
    if (this.nuevoEmpleadoForm?.valid) {
      let formData = this.nuevoEmpleadoForm.value;
      console.log(formData);
      formData = {}; // PARA EVITAR FALLOS
      this.service.grabaDatos("", formData).subscribe({
        next: (datos: EmpleadosjornadaComponent[]) => {
          this.employeeJournals = datos;
        },
        error: (err: string) => {
          console.log("ERROR | agregarEmployeeJournal(): " + err);
        },
      })
      this.nuevoEmpleadoForm.reset();
      this.limpiarNuevoEmployeeJournal();
    }
  }*/

  limpiarNuevoEmployeeJournal() {
    this.selectedJournal = null;
    this.selectedFechaInicio = null;
    this.cerrarDropdownNuevoEmployeeJournal();
  }

  cerrarDropdownNuevoEmployeeJournal() {
    this.mostrarDropdownNuevoEmployeeJournal = false;
    this.searchEmployee = '';
    this.selectedEmployee = null;
  }

  borrarEmployeeJournal(id: number) {
    this.service.borraDatos("http://localhost/accesos1/empleadosJornada",id).subscribe({
      next: (datos:any) => {
        this.employeeJournals = datos;
      },
      error: (err: string) => {
        console.log("ERROR | borrarEmployeeJournal(): " + err);
      },
    });
  }

}
