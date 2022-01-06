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

const routes: Routes = [
  
  {path:""   ,component: LandingComponent,
   children: [
      {path:"Nosotros" ,component: NosotrosLandingComponent},
      {path:"Noticias" ,component: NoticiasLandingComponent},
      {path:"Registro" ,component: RegistroLandingComponent},
      {path:"Ingreso" ,component: IngresoLandingComponent}
    ]
  },
  {path:":id"        ,component: ProfileViewComponent},
  {path:"Admin"        ,component: AdminViewComponent},
  {path:"Usuario"        ,component: UserViewComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [NosotrosLandingComponent,NoticiasLandingComponent,
  RegistroLandingComponent,IngresoLandingComponent,UserViewComponent,AdminViewComponent,ProfileViewComponent,
  LandingComponent];