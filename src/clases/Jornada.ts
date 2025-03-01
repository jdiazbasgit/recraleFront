
export class Jornada {
    id:number
    lunes: string
    martes: string
    miercoles: string
    jueves: string
    viernes: string
    descripcion:string
    especial:number
    
    constructor(id: number, lunes: string, martes: string, miercoles: string, jueves: string, viernes: string, descripcion: string, especial:number) {
        this.id = id;
        this.lunes = lunes;
        this.martes = martes;
        this.miercoles = miercoles;
        this.jueves = jueves;
        this.viernes = viernes;
        this.descripcion = descripcion;
        this.especial = especial
    }
}