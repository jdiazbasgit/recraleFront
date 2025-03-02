import { Employee } from "./Employee";

export class AccesoNuevo{
    
    empleado:Employee;
    
    fecha:Date;
    horaRealEntrada:number;
    minutoRealEntrada:number;
    horaRealSalida:number;
    minutoRealSalida:number;
    clase:string
    constructor(empleado:Employee, fecha:Date, horaRealEntrada:number, minutoRealEntrada:number, horaRealSalida:number, minutoRealSalida:number,clase:string) {
        this.empleado=empleado;
        this.fecha=fecha;
        this.horaRealEntrada=horaRealEntrada;
        this.minutoRealEntrada=minutoRealEntrada;
        this.horaRealSalida=horaRealSalida;
        this.minutoRealSalida=minutoRealSalida;
        this.clase=clase;
    }
}