export class Alumno {
    id: number;
    nombre: string;
    carrera: string;

    constructor(alumno: string,id:number, carrera:string ) {
        this.carrera=carrera;
        this.id=id;
        this.nombre=alumno;
    }
}