import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-landing',
  templateUrl: 'header-landing.component.html',
  styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "../../../src/assets/sass/paper-kit.scss",
  "../../../src/assets/css/demo.css",
  "../../../src/assets/css/nucleo-icons.css",
  "../../../src/assets/css/bootstrap.min.css",'header-landing.component.css']
})
export class HeaderLandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
