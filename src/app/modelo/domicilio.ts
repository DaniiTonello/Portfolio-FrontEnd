export class Domicilio {
    id?: number;
    pais: string;
    provincia: string;
    
    

    constructor(pais: string,provincia: string) {
        this.pais = pais;
        this.provincia = provincia;
        
    }
}
