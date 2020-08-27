import { Injectable } from "@angular/core";
import { BaseService } from '../../services/base.service';

@Injectable({
    providedIn: 'root'
})
export class CadPortifolioService extends BaseService {
    constructor() {
        super();
    }
}
