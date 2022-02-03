import { Component, OnInit, Input } from '@angular/core';
import {Enlace,Perfil} from '../models/usuario'
import {PeticionesService} from '../peticiones.service'

@Component({
  selector: 'profile-link-view',
  templateUrl: './profile-link-view.component.html',
  styleUrls: ['./profile-link-view.component.css']
}) 


export class ProfileLinkViewComponent implements OnInit {
  @Input() NombreUsuario:string;
  @Input() nombreSitio:string;
  @Input() linkSitio:string;
  @Input() colorFondo:string;
  @Input() colorTexto:string;
  @Input() imgSitio:string;
  hover: boolean = false;

  constructor(private apiService: PeticionesService) {
    this.NombreUsuario = "";
    this.nombreSitio="Sitio";
    this.linkSitio="https://www.google.com/";
    this.colorFondo="white";
    this.colorTexto="black";
    this.imgSitio="../../assets/ConfigIcon.svg";
  }

  ngOnInit(): void {
    /*this.nombreSitio=nombSitio;
    this.linkSitio=linkSit;
    this.colorFondo=colorFond;
    this.colorTexto=colorText;
    this.imgSitio=imgSit;*/
  }
  visiteSite():void{
    window.location.href  =this.linkSitio;
  }
  aumentarVisita(url: string):void{
    
  }



}
