
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
  columnsToDisplay = ['Numero', 'Apellidos', 'Nombres'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
  constructor() { }

  ngOnInit(): void {
    increaseValue(),
    decreaseValue(),
  }

}
export interface PeriodicElement {
  Numero: number;
  Apellidos: string;
  Nombres: string;
  puntos: number;
}

export class TableExpandableRowsExample {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Numero', 'Apellidos', 'Nombres'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    Numero: 1,
    Apellidos: 'Hydrogen',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 2,
    Apellidos: 'Helium',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 3,
    Apellidos: 'Lithium',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 4,
    Apellidos: 'Beryllium',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 5,
    Apellidos: 'Boron',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 6,
    Apellidos: 'Carbon',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 7,
    Apellidos: 'Nitrogen',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 8,
    Apellidos: 'Oxygen',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 9,
    Apellidos: 'Fluorine',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 10,
    Apellidos: 'Neon',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 11,
    Apellidos: 'Hydrogen',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 12,
    Apellidos: 'Helium',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 13,
    Apellidos: 'Lithium',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 14,
    Apellidos: 'Beryllium',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 15,
    Apellidos: 'Boron',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 16,
    Apellidos: 'Carbon',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 17,
    Apellidos: 'Nitrogen',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 18,
    Apellidos: 'Oxygen',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 19,
    Apellidos: 'Fluorine',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
  {
    Numero: 20,
    Apellidos: 'Neon',
    Nombres: 'DADSA',
    puntos: 0 ,
  },
];

function increaseValue() {
  let value = expandedElement.puntos;
  // var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  // document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}