export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    acercaDe: string;

    constructor(nombre: string, apellido: string, acercaDe: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.acercaDe = acercaDe;
    }
    
}
