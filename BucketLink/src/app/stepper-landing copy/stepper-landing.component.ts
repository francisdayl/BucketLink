import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-landing',
  templateUrl: './stepper-landing.component.html',
  styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "../../../src/assets/sass/paper-kit.scss",
  "../../../src/assets/css/demo.css",
  "../../../src/assets/css/nucleo-icons.css",
  "../../../src/assets/css/bootstrap.min.css",'./stepper-landing.component.css']
})
export class StepperLandingComponent implements OnInit {
  focus: any;
  focus1: any;
  

i=0;

titulo=[
  'Create una cuenta en BuckLink',
  'Ingresa con usuario y contrasena',
  'Ingresa tus links y listo!',
]
texto=[
  'Registrate para que puedas centralizar tus links',
  'Luego, ingresa con tu cuenta BucketLink',
  'Elige tu disenos favoritos para tu BucketLink.'
]
class=[
  'active',
  '',
  ''
]

siguiente(){
  if(this.i<=1) {
    this.i++;
    this.class[this.i]='active';
  }
  else {
    this.i=0;
    this.class=[
      'active',
      '',
      ''
    ]
  } 
}
  constructor() { }

  ngOnInit(): void {
    }

}
