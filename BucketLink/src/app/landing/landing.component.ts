import { Component, OnInit } from '@angular/core';
import { HeaderLandingComponent } from '../header-landing/header-landing.component';
import { FooterLandingComponent } from '../footer-landing/footer-landing.component';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
