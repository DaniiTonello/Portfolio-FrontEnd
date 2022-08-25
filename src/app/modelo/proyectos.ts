export class Proyectos {
    id?: number;
    proyecto: string;
    descripcion: string;
    empresa: string;
    duracion: string;

    constructor(proyecto: string,descripcion: string,empresa: string,duracion: string) {
        this.proyecto = proyecto;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.duracion = duracion;
        
    }
}
