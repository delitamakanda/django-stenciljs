import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
    private httpOptions: any;
    private baseUrl = 'http://localhost:8000/api/'

    constructor(
        private http: HttpClient,
        private cookieService: CookieService
    ) { }

    getGenders(): Observable<any>{
        return this.http.get(`${this.baseUrl}genders/`);
    }
}
