import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from  'rxjs/observable/of';
import { Observable, Subject } from 'rxjs';

import { AuthLogin } from '../../models/auth';
import { User } from '../../models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private httpOptions: any;
    private baseUrl = `${environment.serverUrl}/api/`;
    private nextUrl;
    auth$: Subject<boolean>;

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.auth$ = new Subject<boolean>();
    }

    isAuthenticated(status: boolean) {
        this.auth$.next(status);
    }

    createHeaders(token?: string) {
        let data = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': this.cookieService.get('csrftoken')
        };

        if (token) {
            data['Authorization'] = `JWT ${token}`;
        }

        this.httpOptions = {
            headers: new HttpHeaders(data)
        }

        return this.httpOptions;
    }

    checkToken(){
        return this.cookieService.check("jwttoken")
    }
    getToken(){
        return this.cookieService.get("jwttoken")
    }
    performLogout(msg?:string){
        return this.cookieService.delete('jwttoken', '/');
        // this.deleteUsername()
        this.router.navigate(['/']);
    }

    getNextUrl(){
        this.route.queryParams.subscribe( params => {
            if (params['next']){
                this.nextUrl = params['next']
                switch (this.nextUrl) {
                    case "/account/delete":
                    this.nextUrl = null
                    break;
                }
            }
        })
        return this.nextUrl;
    }

    setUsername(user:User){
        this.cookieService.set('username', user.username);
    }

    deleteUsername(){
        this.cookieService.delete('username');
    }

    getUsername():string {
        return this.cookieService.get('username') || null;
    }

    performLogin(token, expires?:Date, msg?:string) {
        let expiryDate = null;
        if (expires){
            expiryDate = expires
        }
        this.cookieService.set('jwttoken', token, expiryDate, "/");
        const nextUrl = this.getNextUrl();
        if (nextUrl){
            this.router.navigate([nextUrl]);
        } else {
            this.router.navigate(['/dashboard']);
        }
    }
    /*
    login(userData) {
    let url: string = '/api/login-user';
    return this.http.post(url, userData, { headers: this.httpOptions }).subscribe(
    data => {
    console.log(data)
    if( data['status'] == 'success' ) {
    //this.cookieService.put('token', data['token']);
} else {
console.log('Invalid Credentials');
}
},
err => {
console.log(err);
}
);
}

register(userData) {
let url: string = '/api/register-user';
return this.http.post(url, userData, { headers: this.httpOptions }).subscribe(
data => {
console.log(data);
},
err => {
console.log(err);
}
);
}*/

    login(data: AuthLogin): Observable<any>{
        // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImNmZSIsImV4cCI6MTUxNzQzMDkzNSwiZW1haWwiOiJoZWxsb0B0ZWFtY2ZlLmNvbSIsIm9yaWdfaWF0IjoxNTE3NDMwNjM1fQ.pB6-lE55DBBu0pGv_r85oFaI3OODc69MlAIfno7SM_w'
        let httpOptions = this.createHeaders();
        let apiLoginEndpoint = `${this.baseUrl}login-user/`;
        return this.http.post(apiLoginEndpoint, data, httpOptions); // , httpOptions)
    }

    register(data: any): Observable<any>{
        let httpOptions = this.createHeaders();
        let apiRegisterEndpoint = `${this.baseUrl}register-user/`;
        return this.http.post(apiRegisterEndpoint, data, httpOptions);
    }
}
