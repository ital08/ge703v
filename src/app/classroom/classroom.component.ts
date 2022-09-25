
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClassroomComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Numero', 'Apellido', 'Nombre'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
  constructor() { }

  ngOnInit(): void {
  }
  increaseValue(student: PeriodicElement){
    // let value = student.puntos;
    // value = isNaN(value) ? 0 : value;
    // value++;
  }
  decreaseValue(student: any){
    let value = student.puntos;
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
  }

}
export interface PeriodicElement {
  id: number;
  codigoUni: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  nombre: string;
  s1: number ;
  s2: number ;
  s3: number ;
  s4: number ;
  s5: number ;
  s6: number ;
  s7: number ;
  s8: number ;
  s9: number ;
  s10: number ;
  s11: number ;
  s12: number ;
  s13: number ;
  s14: number ;
  s15: number ;
  s16: number ;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    codigoUni: '20191124F',
    apellidoPaterno: 'Chambi',
    apellidoMaterno: 'Talaverano',
    nombre: 'Marcelo',
    s1: 0 ,
    s2: 0 ,
    s3: 0 ,
    s4: 0 ,
    s5: 0 ,
    s6: 0 ,
    s7: 0 ,
    s8: 0 ,
    s9: 0 ,
    s10: 0 ,
    s11: 0 ,
    s12: 0 ,
    s13: 0 ,
    s14: 0 ,
    s15: 0 ,
    s16: 0 ,
  },
  
];