import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService
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

}
