import { Employee } from "./Employee";
import { Jornada } from "./Jornada";


export class EmployeeJournal {
    id: number;
    empleado: Employee;
    jornada: Jornada;
    constructor(id: number,  empleado: Employee, jornada: Jornada) {
        this.id = id;
        
        this.empleado = empleado;
        this.jornada = jornada;
    }
}