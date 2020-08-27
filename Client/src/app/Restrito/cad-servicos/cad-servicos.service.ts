import { Injectable } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CadastraServicoViewModel } from './cad-servicosVM/cadastra-servico-view-model';
import { Observable } from 'rxjs';
import { ResultViewModel } from '../../Shared/result-view-model.model';


@Injectable({
  providedIn: 'root'
})
export class CadServicosService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  postServicos(servico: CadastraServicoViewModel, imagem: File): Observable<ResultViewModel> {
    let options = {
      headers: this.getHeader()
    };

    const formdata: FormData = new FormData();
    formdata.append('servico', JSON.stringify(servico));
    formdata.append('files', imagem);

    return this.http.post<ResultViewModel>(`${this.UrlV1}servico/v1/cadastrar`, formdata, options);

  }

  // getServicos(): Observable<CadastraServicoViewModel[]>
  getServicos(): Observable<ResultViewModel> {
    let options = {
      headers: this.getHeader()
    };

    return this.http.get<ResultViewModel>(`${this.UrlV1}servico/v1/listaservicos`, options);

  }

  deleteServicos(id: any): Observable<any> {
    let options = {
      headers: this.getAuthHeader(),
      params: new HttpParams().append('id', id)
    };

    return this.http.delete<any>(`${this.UrlV1}servico/v1/deletaservico`, options);

  }

  putServicos(servico: CadastraServicoViewModel, imagem: File): Observable<ResultViewModel> {
    let options = {
      headers: this.getHeader()
    };

    const formdata: FormData = new FormData();
    if (imagem !== null || imagem !== undefined) {
      formdata.append('files', imagem);
    }
    formdata.append('servico', JSON.stringify(servico));

    return this.http.put<ResultViewModel>(`${this.UrlV1}servico/v1/alteraservico`, formdata, options);

  }

}
