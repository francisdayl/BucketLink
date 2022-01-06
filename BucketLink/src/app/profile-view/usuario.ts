
export class Enlace{
    nombre:string ;
    imagen:string ;
    visibilidad: boolean;
    nombreUrl: string;
    colorFondo: string;
    colorLetra: string;

    constructor(nomb:string ,nombUrl:string,nombImg:string,visi:boolean,colorF:string,colorL:string){
        this.nombre = nomb;
        this.nombreUrl = nombUrl;
        this.imagen = nombImg;
        this.visibilidad = visi;
        this.colorFondo = colorF;
        this.colorLetra = colorL

    }
}


