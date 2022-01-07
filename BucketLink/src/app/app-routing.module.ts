import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosLandingComponent } from './nosotros-landing/nosotros-landing.component';
import { NoticiasLandingComponent } from './noticias-landing/noticias-landing.component';
import { RegistroLandingComponent } from './registro-landing/registro-landing.component';
import { IngresoLandingComponent } from './ingreso-landing/ingreso-landing.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { LandingComponent } from './landing/landing.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { LandingContentComponent } from './landing-content/landing-content.component';

import { ProfileLinkViewComponent } from './profile-link-view/profile-link-view.component';

const routes: Routes = [
  
  {path:""   ,component: LandingComponent,
   children: [
      {path:"" ,component: LandingContentComponent},
      {path:"Nosotros" ,component: NosotrosLandingComponent},
      {path:"Noticias" ,component: NoticiasLandingComponent},
      {path:"Registro" ,component: RegistroLandingComponent},
      {path:"Ingreso" ,component: IngresoLandingComponent}
    ]
  },
  
  {path:"Admin"        ,component: AdminViewComponent},
  {path:"Usuario"        ,component: UserViewComponent},
  {path:"Error"        ,component: ErrorViewComponent},
  {path:":id"        ,component: ProfileViewComponent},
  {path:"**"        ,component: ErrorViewComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [NosotrosLandingComponent,NoticiasLandingComponent,
  RegistroLandingComponent,IngresoLandingComponent,UserViewComponent,AdminViewComponent,
  ProfileViewComponent,ProfileLinkViewComponent,LandingComponent,ErrorViewComponent,LandingContentComponent,];