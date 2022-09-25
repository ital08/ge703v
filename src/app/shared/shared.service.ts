import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    //** Utilizar las variables de entorno */

    serverPath: string = 'http://localhost:4200';
    //serverPath: string = 'https://gsweb.azurewebsites.net';
}
