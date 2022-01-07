import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';
import { ProfileLinkViewComponent } from './profile-link-view/profile-link-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderLandingComponent,
    FooterLandingComponent,
    RoutingComponents,
    ProfileLinkViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
