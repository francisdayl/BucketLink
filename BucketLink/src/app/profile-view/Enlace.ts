

export class Enlace{
    nombre:string ;
    imagen:string ;
    nombreUrl: string;
    colorFondo: string;
    colorLetra: string;
    constructor(nomb:string ,nombUrl:string,nombImg:string,colorF:string,colorL:string){
        this.nombre = nomb;
        this.nombreUrl = nombUrl;
        this.imagen = nombImg;
        this.colorFondo = colorF;
        this.colorLetra = colorL;
    }
}

export class Usuario{
    nombreUs:string;
    pictUs:string;
    fondo: string;
    enlaces: Enlace[];    
    constructor(nombreUs:string, pictUs:string,fondo:string,enlaces:Enlace[]){
        this.nombreUs=nombreUs;
        this.fondo=fondo;
        this.pictUs=pictUs;
        this.enlaces=enlaces;
    }
}

