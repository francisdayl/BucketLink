import { Component, OnInit } from '@angular/core';
import {Enlace,Perfil} from '../models/usuario'
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  subruta :string ='dfyanez';
  colorF: string = 'white;'
  LinksEx: Enlace[] = [];  
  usuarioPerfil: Perfil = {"username":"dfyanez","Fondo":this.colorF,"CantidadReportes":0}
  

  showBcgPicker:boolean = false;
  showLinkDesign:boolean = false;
  showLinkEdit:boolean = true;

  hoverDesign: boolean = false;
  hoverStatistics: boolean = false;
  hoverConfig: boolean = false;

  designOption:boolean=true;
  statisticsOption:boolean=false;
  configOption:boolean=false;

  constructor(private apiService: PeticionesService) { }

  ngOnInit(): void {
    this.apiService.getEnlaces(this.subruta.toLowerCase()).subscribe(      
      res => {
        this.LinksEx=res;
        console.log(res)
      }
      ,
      err => console.log(err)
    )
    this.apiService.getUsuarioInfo(this.subruta.toLowerCase()).subscribe(
      res2 => {
        console.log(res2)
        this.usuarioPerfil=res2;
      },
      err => console.log(err)
    )
  }

  agregarLink(): void{
    //this.LinksEx.unshift(new Enlace("","","","","",0))    
    contenedor_link: HTMLElement ;
  }
  elegirFondo(): void{
    this.showBcgPicker = true;
    this.showLinkDesign = false;
    this.showLinkEdit = false;
  }
  editarLinks(): void{
    this.showBcgPicker = false;
    this.showLinkDesign = false;
    this.showLinkEdit = true;
  }
  colorearLinks(): void{
    this.showBcgPicker = false;
    this.showLinkDesign = true;
    this.showLinkEdit = false;
  }

  desingPage():void{
    this.designOption=true;
    this.statisticsOption=false;
    this.configOption=false;
  }
  statisticsPage():void{
    this.designOption=false;
    this.statisticsOption=true;
    this.configOption=false;
  }
  configPage():void{
    this.designOption=false;
    this.statisticsOption=false;
    this.configOption=true;
  }

  

}

