import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import {environment} from '../../../environments/environment';

import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    private httpOptions: any;
    private baseUrl = `${environment.serverUrl}api/`;

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
        private authService: AuthService
    ) { }

    createHeaders(token?: string) {
        let data = {
            //'Accept': 'application/json',
            //'Content-Type': 'application/json',
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

    detailUser(): Observable<any>{
        const username = this.authService.getUsername();
        let apiListEndpoint = `${this.baseUrl}user/${username}/`
        return this.http.get(apiListEndpoint)
    }

    detailUserPhoto(): Observable<any>{
        const username = this.authService.getUsername();
        let apiListEndpoint = `${this.baseUrl}user/${username}/photo/`
        return this.http.get(apiListEndpoint)
    }

    postUserPhoto(data: any): Observable<any>{
        let httpOptions = this.createHeaders();
        let apiListEndpoint = `${this.baseUrl}user-photo/`
        return this.http.post(apiListEndpoint, data, httpOptions)
    }

    deleteUserPhoto(id: number) {
        let httpOptions = this.createHeaders();
        let apiDeleteEndpoint = `${this.baseUrl}user-photo/${id}/detail/`
        return this.http.delete(apiDeleteEndpoint, httpOptions)
    }

}
