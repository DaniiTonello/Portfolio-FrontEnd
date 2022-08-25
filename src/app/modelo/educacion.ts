export class Educacion {
    id?: number;
    establecimiento: string;
    carrera: string;
    curso: string;
    duracion: string;
    
    

    constructor(establecimiento: string,carrera: string,curso: string,duracion: string) {
        this.establecimiento = establecimiento;
        this.carrera = carrera;
        this.curso = curso;
        this.duracion = duracion;
    }
}
