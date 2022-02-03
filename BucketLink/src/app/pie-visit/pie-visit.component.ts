import { Component, OnInit } from '@angular/core';
import {Enlace} from '../models/usuario'
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import { PeticionesService } from '../peticiones.service';


@Component({
  selector: 'pie-visit',
  templateUrl: './pie-visit.component.html',
  styleUrls: ['./pie-visit.component.css']
})
export class PieVisitComponent implements OnInit {

  StatsPieChart: any[] = [];

  title = 'Distribucion de las Visitas';

  margin = {top: 20, right: 20, bottom: 30, left: 50};
  width: number;
  height: number;
  radius: number;

  arc: any;
  labelArc: any;
  labelPer: any;
  pie: any;
  color: any;
  svg: any;
  subruta = "dfyanez";

  constructor(private apiService: PeticionesService) {
    this.width = 900 - this.margin.left - this.margin.right ;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }
  LinksEx: Enlace [] = []
  ngOnInit() {
    this.apiService.getEnlaces(this.subruta.toLowerCase()).subscribe(      
      res => {
        let total = 0;
        for(let i = 0; i< res.length;i++){
          let visitados = res[i]["Visitas"]||0
          total+= visitados
        }
        for(let i = 0; i< res.length;i++){
          let visitados = res[i]["Visitas"]||0;
          this.StatsPieChart.push({party: res[i]['WebSiteNombre'], electionP: Math.round(100*visitados/total) })
        }
        console.log(res)
        this.initSvg();
        this.drawPie();
      }
      ,
      err => console.log(err)
    )
    
  }
  

  initSvg() {
    this.color = d3Scale.scaleOrdinal()
        .range(['#FFA500', '#00FF00', '#FF0000']);
    this.arc = d3Shape.arc()
        .outerRadius(this.radius - 10)
        .innerRadius(0);
    this.labelArc = d3Shape.arc()
        .outerRadius(this.radius - 40)
        .innerRadius(this.radius - 40);

    this.labelPer = d3Shape.arc()
        .outerRadius(this.radius - 80)
        .innerRadius(this.radius - 80);

    this.pie = d3Shape.pie()
        .sort(null)
        .value((d: any) => d.electionP);

    this.svg = d3.select('#pieChart')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
        .append('g')
        .attr('transform', 'translate(' + Math.min(this.width, this.height) / 2 + ',' + Math.min(this.width, this.height) / 2 + ')');
  }

  drawPie() {
    const g = this.svg.selectAll('.arc')
        .data(this.pie(this.StatsPieChart))
        .enter().append('g')
        .attr('class', 'arc');
    g.append('path').attr('d', this.arc)
        .style('fill', (d: any) => this.color(d.data.party) );
    g.append('text').attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d) + ')')
        .attr('dy', '.35em')
        .text((d: any) => d.data.party);

    g.append('text').attr('transform', (d: any) => 'translate(' + this.labelPer.centroid(d) + ')')
        .attr('dy', '.35em')
        .text((d: any) => d.data.electionP + '%');
  }
  

}
