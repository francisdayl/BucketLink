import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enlace,Usuario } from './Enlace';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  
  subruta:string ='';
  

  link1 = new Enlace("Instagram","https://www.instagram.com/?hl=es-la","../../assets/Instagram_Icon_White.svg","white","red")
  link2 = new Enlace("Facebook","https://www.facebook.com/","../../assets/Facebook_Icon_White.svg","white","red")
  
  LinksEx: Enlace[] = [this.link1,this.link2];
  
  usuarioPerfil: Usuario = new Usuario(this.subruta,"../../assets/undraw_profile_1.svg","coral",this.LinksEx)
  

  constructor(private route: ActivatedRoute, private router: Router) { }    
  
  ngOnInit(): void {
    this.subruta = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.subruta+"Es el nombre del usuario")
    
    if(this.checkUserExistence(this.subruta.toLowerCase())){
      console.warn("user id is ",  this.route.snapshot.paramMap.get('id'))
    }
    else{
      this.router.navigateByUrl('/Error')
    }
  }

  checkUserExistence(ruta_usuario:string):boolean{
    let usuarios : string[] =['piogram','francisday'];
    if(usuarios.includes(ruta_usuario)){
      return true;
    }    
    return false;
  }

}
