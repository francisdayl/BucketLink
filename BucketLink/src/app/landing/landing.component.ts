import { Component, OnInit } from '@angular/core';
import { HeaderLandingComponent } from '../header-landing/header-landing.component';
import { FooterLandingComponent } from '../footer-landing/footer-landing.component';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "../../../src/assets/sass/paper-kit.scss",
  "../../../src/assets/css/demo.css",
  "../../../src/assets/css/nucleo-icons.css",
  "../../../src/assets/css/bootstrap.min.css",'./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
