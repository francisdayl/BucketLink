import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-landing',
  templateUrl: './formulario-landing.component.html',
  styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "../../../src/assets/sass/paper-kit.scss",
  "../../../src/assets/css/demo.css",
  "../../../src/assets/css/nucleo-icons.css",
  "../../../src/assets/css/bootstrap.min.css",'./formulario-landing.component.css']
})
export class FormularioLandingComponent implements OnInit {
  focus: any;
  focus1: any;
  urlPaises='http://restcountries.eu/rest/v2/all';
  urlemail='http://localhost:3000/email';
  public listapaises:any =[]
  public form!: FormGroup;
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';
  constructor(private restService: RestService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.cargarPaises();
    this.form = this.formBuilder.group({
      nombre:'',  
      apellido:'',
      fechaNacimiento:'',
      ciudad:'',
      pais:'',
      correoElectronico:'',
      detalle:'',
    });
  }
  public cargarPaises(){
    this.restService.get(this.urlPaises)
    .subscribe( Response => 
      {
        this.listapaises=Response;
      });
  }
  
  enviarContacto(){
    let payload = new HttpParams()
    .set('nombre', this.form.value.nombre)
    .set('apellido',this.form.value.apellido)
    .set('fechaNacimiento',this.form.value.fechaNacimiento)
    .set('ciudad', this.form.value.ciudad)
    .set('pais', this.form.value.pais)
    .set('correoElectronico',this.form.value.correoElectronico)
    .set('detalle',this.form.value.detalle);
    this.restService.post(this.urlemail,payload
    ).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      }
      );
    }
    capturar() {
      // Pasamos el valor seleccionado a la variable verSeleccion
      this.verSeleccion = this.opcionSeleccionado;
      console.log(this.opcionSeleccionado);
  }


}
