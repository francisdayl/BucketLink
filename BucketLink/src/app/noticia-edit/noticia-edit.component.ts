import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'noticia-edit',
  templateUrl: './noticia-edit.component.html',
  styleUrls: ['./noticia-edit.component.css']
})
export class NoticiaEditComponent implements OnInit {
  @Input() titulo:string;
  @Input() descripcion:string;
  @Input() imagen:string;
  @Input() id:string;


  constructor() {
    this.titulo="titulo";
    this.descripcion="Descripcion de alto interes";
    this.imagen="";
    this.id="1";
   }

  ngOnInit(): void {
  }

}
