export class ExperienciaLaboral {
    id?: number;
    puesto: string;
    duracion: string;
    ubicacion: string;
    empresa: string;
    descripcion: string;

    constructor(puesto: string,duracion: string,ubicacion: string,empresa: string,descripcion: string) {
        this.puesto = puesto;
        this.duracion = duracion;
        this.ubicacion = ubicacion;
        this.empresa = empresa;
        this.descripcion = descripcion;
        
    }
}
