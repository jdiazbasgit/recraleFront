export class Employee{
    id: number;
    nombre: string;
    apellidos: string;
    identificador: string;
    dni: string;
    fechaAlta: string;
    fechaBaja: string;

    constructor(id: number, nombre: string, apellidos: string, identificador: string, dni: string, fechaAlt: string, fechaBaja: string){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.identificador = identificador;
        this.dni = dni;
        this.fechaAlta = fechaAlt;
        this.fechaBaja = fechaBaja;
    }
}