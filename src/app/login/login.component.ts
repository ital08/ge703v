import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { ExcelService } from '../shared/services/excel.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private route:Router,
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private ExcelService: ExcelService
  ) { }

  ngOnInit(): void {
    this.router.queryParams
    .subscribe(params => {
      if(params.error=='1'){
        this.toastr.warning('No se pudo encontrar el curso','Atención')
      }
    }
  );
    this.createLoginForm();
  }
  createLoginForm(){
    this.form = this.fb.group({
      codigo: new FormControl ('',[Validators.required]),
      password: new FormControl ('',[Validators.required]),
    })
  }
  login(){
    let codigo:string = this.form.value.codigo;
    let password:string = this.form.value.password;
    this.route.navigate([`classroom/${codigo}`], { queryParams:{ password: password}});
  }
  descargar(){
    this.ExcelService.generateExcel(userList)
  }

}
const userList = [
  {
    codigoUni: '20191124F',
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
  {
    codigoUni: '20191124F',
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
  }, {
    codigoUni: '20191124F',
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
  }
]