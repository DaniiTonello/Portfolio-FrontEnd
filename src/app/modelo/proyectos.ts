export class Proyectos {
    id?: number;
    proyecto: string;
    descripcion: string;
    empresa: string;
    duracion: string;
    tecnologias: string;
    imagenProyecto: string;
    linkProyecto: string;

    constructor(proyecto: string,descripcion: string,empresa: string,duracion: string,tecnologias: string, imagenProyecto: string, linkProyecto: string) {
        this.proyecto = proyecto;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.duracion = duracion;
        this.tecnologias = tecnologias;
        this.imagenProyecto = imagenProyecto;
        this.linkProyecto = linkProyecto;
    }
}
