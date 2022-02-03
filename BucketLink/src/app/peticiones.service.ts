import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Enlace,Usuario,Perfil} from './models/usuario'

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http:HttpClient) {

  }
  getRecurso(ruta:string){
    return this.http.get(ruta)
  }
  //Metodo para obtener los enlaces
  getEnlaces(username: string){
    return this.http.get<Enlace []>('http://localhost:3002/links/'+username)
  }
  //Metodo para obtener usuario y su info
  getUsuarioInfo(username: string){
    return this.http.get<Perfil>('http://localhost:3001/clientes/perfil/'+username)
  }
  guardarFondo(fondo:string){
    
  }

  guardarEstilosLink(fondo:string,color:string){

  }
  aumentarVisitas(ruta:string){

  }
  obtenerVisitas(){
    
  }

}
