import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private httpOptions: any;

    constructor(private http: HttpClient, private cookieService: CookieService) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': this.cookieService.get('csrftoken')
            })
        }
    }

    login(userData) {
		let url: string = '/api/login-user';
		return this.http.post(url, userData, { headers: this.httpOptions }).subscribe(
            data => {
                console.log(data)
                if( data['status'] == 'success' ) {
                    this.cookieService.put('token', data['token']);
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
	}
}
