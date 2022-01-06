import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosLandingComponent } from './nosotros-landing/nosotros-landing.component';
import { NoticiasLandingComponent } from './noticias-landing/noticias-landing.component';
import { RegistroLandingComponent } from './registro-landing/registro-landing.component';
import { IngresoLandingComponent } from './ingreso-landing/ingreso-landing.component';

const routes: Routes = [
  {path:"Nosotros" ,component: NosotrosLandingComponent},
  {path:"Noticias" ,component: NoticiasLandingComponent},
  {path:"Registro" ,component: RegistroLandingComponent},
  {path:"Ingreso" ,component: IngresoLandingComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [NosotrosLandingComponent,NoticiasLandingComponent,RegistroLandingComponent,IngresoLandingComponent];