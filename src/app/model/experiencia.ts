export class Experiencia {

    id?: number;
    lugar: string;
    desde: string ;
    hasta: string ;
    descripcion: string ;


    constructor( lugar:string, desde:string, hasta:string, descripcion:string ){
        this.lugar=lugar;
        this.desde=desde;
        this.hasta=hasta;
        this.descripcion=descripcion;
    }

}
