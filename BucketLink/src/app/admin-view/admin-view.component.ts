import { Component, OnInit } from '@angular/core';
import {Enlace,Usuario} from '../models/usuario'
//import {} from "node_modules/d3";


@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  subruta:string ='';


  LinksEx: Enlace[] = [];  
  usuarioPerfil: Usuario = {"nombreUs":this.subruta,"pictUs":"../../assets/undraw_profile_1.svg","fondo":"coral","enlaces":this.LinksEx}
  

  showBcgPicker:boolean = false;
  showLinkDesign:boolean = false;
  showLinkEdit:boolean = true;

  hoverDesign: boolean = false;
  hoverStatistics: boolean = false;
  hoverConfig: boolean = false;

  designOption:boolean=true;
  statisticsOption:boolean=false;
  configOption:boolean=false;

  constructor() { }

  ngOnInit(): void {
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


