import { FormGroup, FormBuilder } from '@angular/forms';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../shared/services/excel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassroomService } from './classroom.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClassroomComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  form: FormGroup;
  codigo: any;
  loadingData: boolean = true;
  password: any;
  columnsToDisplay = ['Numero', 'Apellido', 'Nombre'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private ExcelService: ExcelService,
    private ClassroomService: ClassroomService
  ) { }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      this.password = atob(params['pwd']);
      this.codigo = atob(params['cod']);
    });

    this.createForm();
  }

  descargar() {
    let dataExported = [];
    this.dataSource.forEach(element => {
      dataExported.push({
        codigoAlumno: element.codigoAlumno,
        apellidoPaterno: element.apellidoPaterno,
        apellidoMaterno: element.apellidoMaterno,
        nombre: element.nombre,
        s1: element.s1,
        s2: element.s2,
        s3: element.s3,
        s4: element.s4,
        s5: element.s5,
        s6: element.s6,
        s7: element.s7,
        s8: element.s8,
        s9: element.s9,
        s10: element.s10,
        s11: element.s11,
        s12: element.s12,
        s13: element.s13,
        s14: element.s14,
        s15: element.s15,
        s16: element.s16
      })
    });
    this.ExcelService.generateExcel(dataExported, this.codigo)
  }
  async createForm() {
    this.form = this.fb.group({
      numeroSemana: 1
    })
    this.form.controls['numeroSemana'].valueChanges.subscribe(value => console.log(value))

    this.getData()
  }
  getData() {
    this.loadingData=true;
    this.ClassroomService.getData(this.codigo, this.password).subscribe(
      (response: any) => {
        this.dataSource = [];
        if (response.body) {
          let body = response.body;
          body.forEach(element => {
            this.dataSource.push({
              _id: element._id,
              codigoAlumno: element.codigoAlumno,
              apellidoPaterno: element.apellidoPaterno,
              apellidoMaterno: element.apellidoMaterno,
              nombre: element.nombre,
              s1: element.s1,
              s2: element.s2,
              s3: element.s3,
              s4: element.s4,
              s5: element.s5,
              s6: element.s6,
              s7: element.s7,
              s8: element.s8,
              s9: element.s9,
              s10: element.s10,
              s11: element.s11,
              s12: element.s12,
              s13: element.s13,
              s14: element.s14,
              s15: element.s15,
              s16: element.s16,
            })
          });
          this.loadingData=!this.loadingData;
        }
      },
      (error: any) => {
        this.toastr.error(error.error, 'Error')
      }
    )
  }
  loadingSave=false;
  saveValue(index: number){
    this.loadingSave=true;
    this.ClassroomService.postData(this.codigo,this.password,this.dataSource[index]).subscribe(
      (response:any)=>{
        let body = response.body;
        this.toastr.success('Registro Actualizado', 'Exitoso');
        this.loadingSave=false;
      },
      (error)=>{
        this.toastr.error(error.error, 'Error');
        this.loadingSave=false;
      }
    );
  }
  increaseValue1(index: number, p: number) {
    this.dataSource[index].s1 = this.dataSource[index].s1 + p;
  }
  decreaseValue1(index: number, p: number) {
    this.dataSource[index].s1 = this.dataSource[index].s1 - p;
  }

  increaseValue2(index: number, p: number) {
    this.dataSource[index].s2 = this.dataSource[index].s2 + p;
  }
  decreaseValue2(index: number, p: number) {
    this.dataSource[index].s2 = this.dataSource[index].s2 - p;
  }

  increaseValue3(index: number, p: number) {
    this.dataSource[index].s3 = this.dataSource[index].s3 + p;
  }
  decreaseValue3(index: number, p: number) {
    this.dataSource[index].s3 = this.dataSource[index].s3 - p;
  }

  increaseValue4(index: number, p: number) {
    this.dataSource[index].s4 = this.dataSource[index].s4 + p;
  }
  decreaseValue4(index: number, p: number) {
    this.dataSource[index].s4 = this.dataSource[index].s4 - p;
  }

  increaseValue5(index: number, p: number) {
    this.dataSource[index].s5 = this.dataSource[index].s5 + p;
  }
  decreaseValue5(index: number, p: number) {
    this.dataSource[index].s5 = this.dataSource[index].s5 - p;
  }

  increaseValue6(index: number, p: number) {
    this.dataSource[index].s6 = this.dataSource[index].s6 + p;
  }
  decreaseValue6(index: number, p: number) {
    this.dataSource[index].s6 = this.dataSource[index].s6 - p;
  }

  increaseValue7(index: number, p: number) {
    this.dataSource[index].s7 = this.dataSource[index].s7 + p;
  }
  decreaseValue7(index: number, p: number) {
    this.dataSource[index].s7 = this.dataSource[index].s7 - p;
  }

  increaseValue8(index: number, p: number) {
    this.dataSource[index].s8 = this.dataSource[index].s8 + p;
  }
  decreaseValue8(index: number, p: number) {
    this.dataSource[index].s8 = this.dataSource[index].s8 - p;
  }

  increaseValue9(index: number, p: number) {
    this.dataSource[index].s9 = this.dataSource[index].s9 + p;
  }
  decreaseValue9(index: number, p: number) {
    this.dataSource[index].s9 = this.dataSource[index].s9 - p;
  }

  increaseValue10(index: number, p: number) {
    this.dataSource[index].s10 = this.dataSource[index].s10 + p;
  }
  decreaseValue10(index: number, p: number) {
    this.dataSource[index].s10 = this.dataSource[index].s10 - p;
  }

  increaseValue11(index: number, p: number) {
    this.dataSource[index].s11 = this.dataSource[index].s11 + p;
  }
  decreaseValue11(index: number, p: number) {
    this.dataSource[index].s11 = this.dataSource[index].s11 - p;
  }

  increaseValue12(index: number, p: number) {
    this.dataSource[index].s12 = this.dataSource[index].s12 + p;
  }
  decreaseValue12(index: number, p: number) {
    this.dataSource[index].s12 = this.dataSource[index].s12 - p;
  }

  increaseValue13(index: number, p: number) {
    this.dataSource[index].s13 = this.dataSource[index].s13 + p;
  }
  decreaseValue13(index: number, p: number) {
    this.dataSource[index].s13 = this.dataSource[index].s13 - p;
  }

  increaseValue14(index: number, p: number) {
    this.dataSource[index].s14 = this.dataSource[index].s14 + p;
  }
  decreaseValue14(index: number, p: number) {
    this.dataSource[index].s14 = this.dataSource[index].s14 - p;
  }

  increaseValue15(index: number, p: number) {
    this.dataSource[index].s15 = this.dataSource[index].s15 + p;
  }
  decreaseValue15(index: number, p: number) {
    this.dataSource[index].s15 = this.dataSource[index].s15 - p;
  }

  increaseValue16(index: number, p: number) {
    this.dataSource[index].s16 = this.dataSource[index].s16 + p;
  }
  decreaseValue16(index: number, p: number) {
    this.dataSource[index].s16 = this.dataSource[index].s16 - p;
  }

}
export interface PeriodicElement {
  _id: number;
  codigoAlumno: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  nombre: string;
  s1: number;
  s2: number;
  s3: number;
  s4: number;
  s5: number;
  s6: number;
  s7: number;
  s8: number;
  s9: number;
  s10: number;
  s11: number;
  s12: number;
  s13: number;
  s14: number;
  s15: number;
  s16: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    _id: 1,
    codigoAlumno: '20191124F',
    apellidoPaterno: 'Chambi',
    apellidoMaterno: 'Talaverano',
    nombre: 'Marcelo',
    s1: 0,
    s2: 0,
    s3: 0,
    s4: 0,
    s5: 0,
    s6: 0,
    s7: 0,
    s8: 0,
    s9: 0,
    s10: 0,
    s11: 0,
    s12: 0,
    s13: 0,
    s14: 0,
    s15: 0,
    s16: 0,
  },
];