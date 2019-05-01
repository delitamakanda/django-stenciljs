import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import {environment} from '../../../environments/environment';

import { Observable } from 'rxjs';
import { of } from  'rxjs/observable/of';
import { catchError, map, tap } from  'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    private httpOptions: any;
    private baseUrl = `${environment.serverUrl}/api/`;

    constructor(
        private http: HttpClient,
        private cookieService: CookieService
    ) { }

    createHeaders(token?: string) {
        let data = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': this.cookieService.get('csrftoken')
        };

        if (token) {
            data['Authorization'] = `JWT ${token}`
        }

        this.httpOptions = {
            headers: new HttpHeaders(data)
        }
        console.log(this.httpOptions.headers)

        return this.httpOptions;
    }

    list(): Observable<any>{
        let apiListEndpoint = `${this.baseUrl}messages/`
        return this.http.get(apiListEndpoint)
    }

}
