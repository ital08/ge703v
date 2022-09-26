import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpService } from '../shared/services/http.service';
@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  apiServer = environment.urlApi;
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService) { }
  getData(codigo:string,password:string){
    return this.httpService.get(`${this.apiServer}/participacion/${codigo}`);
  }
  postData(codigo:string,password:string,data:any){
    let body = {
      "curso": {
        "codigo": codigo,
        "password": password
      },
      "nombre": data.nombre,
      "codigoAlumno": data.codigoAlumno,
      "apellidoPaterno": data.apellidoPaterno,
      "apellidoMaterno":data.apellidoMaterno,
      "s1": data.s1,
      "s2": data.s2,
      "s3": data.s3,
      "s4":data.s4,
      "s5": data.s5,
      "s6": data.s6,
      "s7": data.s7,
      "s8":data.s8,
      "s9": data.s9,
      "s10": data.s10,
      "s11": data.s11,
      "s12": data.s12,
      "s13": data.s13,
      "s14": data.s14,
      "s15": data.s15,
      "s16": data.s16
    }
    return this.httpService.post<any>(`${this.apiServer}/participacion`,body)
  }
}