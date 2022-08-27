export class Tecnologias {
    id?: number;
    tecnologia: string;
    nivelExperiencia: string;

    constructor(tecnologia: string,nivelExperiencia: string) {
        this.tecnologia = tecnologia;
        this.nivelExperiencia = nivelExperiencia;
    }
}
