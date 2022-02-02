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
  'Regitrate',
  'Elige y pide',
  'Forma de pago',
]
texto=[
  'Registrate para que puedas realizar los pedidos.',
  'Ve a la tienda y elige tus productos preferidos.',
  'Elige tu forma de pago, puede ser por cargeta o en efectivo.'
]
class=[
  'active',
  '',
  ''
]

siguiente(){
  if(this.i<=2) {
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
