export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    pais: string;
    provincia: string;
    acercaDe: string;
    imagen: string;

    constructor(nombre: string, apellido: string, pais: string, provincia: string, acercaDe: string, imagen: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.provincia = provincia;
        this.acercaDe = acercaDe;
        this.imagen = imagen;
    }
    
}
