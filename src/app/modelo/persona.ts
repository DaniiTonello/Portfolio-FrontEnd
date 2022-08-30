export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    acercaDe: string;
    imagen: string;

    constructor(nombre: string, apellido: string, acercaDe: string, imagen: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.acercaDe = acercaDe;
        this.imagen = imagen;
    }
    
}
