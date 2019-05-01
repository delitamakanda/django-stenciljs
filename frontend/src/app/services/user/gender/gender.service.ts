import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
    private httpOptions: any;
    private baseUrl = `${environment.serverUrl}/api/`;

    constructor(
        private http: HttpClient,
        private cookieService: CookieService
    ) { }

    getGenders(): Observable<any>{
        return this.http.get(`${this.baseUrl}genders/`);
    }
}
