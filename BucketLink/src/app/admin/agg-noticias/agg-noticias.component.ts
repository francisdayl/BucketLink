import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import { HttpClient,HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DataNoticias} from '../models/tabla.model';

@Component({
  selector: 'app-agg-noticias',
  templateUrl: './agg-noticias.component.html',
  styleUrls: ['./agg-noticias.component.css']
})
export class AggNoticiasComponent implements OnInit {

  public form:FormGroup;
  submitted = false;
  loading = false;
  id2: string | null;
  titulo = 'Agregar Noticia';
  DataNoticias:any;
 
  constructor(private fb: FormBuilder,
    private restService: RestService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      idPersona: ['', Validators.required],
    })
    this.id2 = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id2)
  }



  ngOnInit(): void {
    this.esEditar();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  url='http://localhost:3002/Noticia';

  agregarNoticia(){
    let payload = new HttpParams()
    .set('titulo', this.form.value.titulo)
    .set('descripcion', this.form.value.descripcion)
    .set('imagen',this.form.value.imagen)
    .set('id',this.form.value.id)
    
    this.loading = true;
    this.restService.post(this.url,payload)
    .subscribe(
      data=>{
        console.log(data);
        this.form.setValue({
          titulo:'',
          descripcion:'',
          imagen:'',
          id:''
          
        })
        this.openSnackBar("Noticia creado","ACEPTAR");
      }
      );
      this.loading = false;

  }
  agregarEditarNoticia() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    if (this.id2 === null) {
      this.agregarNoticia();
    } else {
      this.editarNoticia(this.id2);
    }
  }
  editarNoticia(id: string) {
    let payload = new HttpParams()
    .set('titulo', this.form.value.titulo)
    .set('descripcion', this.form.value.descripcion)
    .set('imagen', this.form.value.imagen)
    .set('id', this.form.value.id)


    this.loading = true;

    this.restService.put(this.url+'/'+this.id2,payload).subscribe(
      data=>{
        console.log(data);
        this.loading = false;

        this.openSnackBar("Noticia actualizado","ACEPTAR");
      }
      );

  }

  esEditar() {
    if (this.id2 !== null) {
      this.titulo = 'Editar Noticia'
      this.loading = true;
      this.restService.get(this.url+'/'+this.id2).subscribe(data => {
        this.DataNoticias=data as DataNoticias[];
        console.log(this.DataNoticias);
        this.form.patchValue({
          titulo:this.DataNoticias.titulo,
          descripcion:this.DataNoticias.descripcion,
          imagen:this.DataNoticias.imagen,
          id:this.DataNoticias.id,
          
        })
        console.log(this.DataNoticias.titulo);
        this.loading = false;
      })
    }
  }
}
