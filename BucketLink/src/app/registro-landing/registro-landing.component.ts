import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-landing',
  templateUrl: './registro-landing.component.html',
  styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "../../../src/assets/sass/paper-kit.scss",
  "../../../src/assets/css/demo.css",
  "../../../src/assets/css/nucleo-icons.css",
  "../../../src/assets/css/bootstrap.min.css",'./registro-landing.component.css']
})
export class RegistroLandingComponent implements OnInit {
  focus: any;
  focus1: any;
  constructor() { }

  ngOnInit(): void {
  }

}
