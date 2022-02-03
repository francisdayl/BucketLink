 import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';
import { FormularioLandingComponent } from './formulario-landing/formulario-landing.component';
import { StepperLandingComponent } from './stepper-landing copy/stepper-landing.component';
import { LinkEditableComponent } from './link-editable/link-editable.component';
import { CelularViewComponent } from './celular-view/celular-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LineChartVisitComponent } from './line-chart-visit/line-chart-visit.component';
import { BarChartVisitComponent } from './bar-chart-visit/bar-chart-visit.component';
import { PieVisitComponent } from './pie-visit/pie-visit.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { NavbarAdminSuperiorComponent } from './admin/navbar-admin-superior/navbar-admin-superior.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderLandingComponent,
    FooterLandingComponent,
    NavbarAdminComponent,
    NavbarAdminSuperiorComponent,
    RoutingComponents,
    LinkEditableComponent,
    CelularViewComponent,
    FormularioLandingComponent,
    StepperLandingComponent,
    LineChartVisitComponent,
    BarChartVisitComponent,
    PieVisitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
