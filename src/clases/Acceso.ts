import { Employee } from "./Employee";

export class Acceso{
    id:number;
    empleado:Employee;
    tipo:number
    fecha:Date;
    horaReal:number;
    minutoReal:number;
    constructor(id:number, tipo:number, fecha:Date, horaReal:number, minutoReal:number, empleado:Employee){
        this.id=id;
        this.empleado=empleado;
        this.tipo=tipo;
        this.fecha=fecha;
        this.horaReal=horaReal;
        this.minutoReal=minutoReal;
    }
}