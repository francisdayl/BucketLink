


export interface Enlace{
    WebSiteNombre:string ;
    Imagen:string ;
    WebSiteURL: string;
    ColorFondo: string;
    ColorLetra: string;
    Visitas?: number;
}

export interface Usuario{
    nombreUs:string;
    pictUs:string;
    fondo: string;
    enlaces: Enlace[];    

}

export interface Perfil{
    username:string;
    Fondo:string;
    CantidadReportes:number;
}

