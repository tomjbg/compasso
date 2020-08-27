import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";


export abstract class BaseService {
  public Token: string = "";
  public Usuario: any;
  protected UrlV1: string = environment.api;

  constructor() {  }

  isLoggedIn(): boolean {
    let u = localStorage.getItem('comp.user');
    let t = localStorage.getItem('comp.token');
    return u !== undefined && t !== undefined;
  }



  protected getAuthHeader(): HttpHeaders {
    let token = localStorage.getItem('comp.token');
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return httpHeaders;
  }

  protected getHeader(): HttpHeaders {
    let token = localStorage.getItem('comp.token');
    let httpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return httpHeaders;
  }



}
