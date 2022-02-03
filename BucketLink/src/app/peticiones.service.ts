import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Enlace,Usuario} from 'src/app/profile-view/Enlace'

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http:HttpClient) {

  }
  
  //Metodo para obtener los enlaces
  getEnlaces(){
    return this.http.get<Enlace []>('')

  }
  //Metodo para obtener usuario y su info
  getUsuario(){
    return this.http.get<Usuario>('')
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
