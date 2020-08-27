import { BaseService } from '../../services/base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultViewModel } from 'src/app/Shared/result-view-model.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class CadHomeService extends BaseService {
    constructor(private http: HttpClient) {
        super();
    }

    posthome(): void {
        
    }

    getHome(): Observable<ResultViewModel> {
        let options = {
            headers: this.getHeader()
        };

        return this.http.get<ResultViewModel>(`${this.UrlV1}somos/v1/listasomos`, options);
    }

    
}
