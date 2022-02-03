import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { window } from 'd3';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
//import { Enlace,Usuario } from './Enlace';
import {Enlace,Perfil} from '../models/usuario'
import {PeticionesService} from '../peticiones.service'


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  
  subruta:string ='';
  LinksEx: Enlace[] = [];
  colorF: string ='';
  
  perfilUsuario: Perfil = {"username":"","Fondo":this.colorF,"CantidadReportes":0}
  //usuarioPerfil: Perfil = {"username":"","Fondo":this.colorF,"CantidadReportes":0} ;//= Usuario(this.subruta,,this.colorF,this.LinksEx)
  img:string = "../../assets/undraw_profile_1.svg";

  constructor(private route: ActivatedRoute, private router: Router, private apiService: PeticionesService) { }    
  
  ngOnInit(): void {
    this.subruta = this.route.snapshot.paramMap.get('id') || '';
    
    this.apiService.getEnlaces(this.subruta.toLowerCase()).subscribe(      
      res => {
        this.LinksEx=res;
        console.log(res)
        if(this.LinksEx.length==0)
          this.router.navigateByUrl('/Error')
      }
      ,
      err => console.log(err)
    )
    this.apiService.getUsuarioInfo(this.subruta.toLowerCase()).subscribe(
      res2 => {
        console.log(res2)
        this.perfilUsuario=res2;
      },
      err => console.log(err)
    )
    
  }


}
