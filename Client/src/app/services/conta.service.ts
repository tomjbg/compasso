import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../security/usuarios/usuario.model';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ContaService extends BaseService {

  constructor(private httpCli: HttpClient) {
    super();
   }

   login(username: string, password: string): Observable<Token> {

     let usuario = {
      username: username,
      password: password
     };

    let options = {
      headers: this.getAuthHeader()
    };

    return this.httpCli.post<Token>(`${this.UrlV1}conta/v1/login`, usuario, options);

   }

   logout(): boolean {
      localStorage.removeItem('comp.token');
      localStorage.removeItem('comp.access');

      return (localStorage.getItem('comp.token') === null);
   }

}
