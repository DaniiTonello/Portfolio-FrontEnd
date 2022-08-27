export class Proyectos {
    id?: number;
    proyecto: string;
    descripcion: string;
    empresa: string;
    duracion: string;
    tecnologias: string;
    imagenProyecto: string;

    constructor(proyecto: string,descripcion: string,empresa: string,duracion: string,tecnologias: string, imagenProyecto: string) {
        this.proyecto = proyecto;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.duracion = duracion;
        this.tecnologias = tecnologias;
        this.imagenProyecto = imagenProyecto;
    }
}
