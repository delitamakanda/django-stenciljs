import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'X-CSRFToken': this.cookieService.get('csrftoken')
    })

    constructor(private http: Http, private cookieService: CookieService) { }
}
