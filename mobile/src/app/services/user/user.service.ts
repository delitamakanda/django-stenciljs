import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { readCookie } from '../cookie.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    // http options used for making API calls
    private httpOptions: any;
    public token: string;
    public token_expires: Date;
    public username: string;
    public errors: any = [];

    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json', /*'X-CSRFToken': readCookie('csrftoken')*/})
        };
    }

    public login(user) {
        this.http.post('/api/token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
            data => {
                this.updateData(data['token']);
            },
            err => {
                this.errors = err['error'];
            }
        );
    }

    public refreshToken() {
        this.http.post('/api/token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
            data => {
                this.updateData(data['token']);
            },
            err => {
                this.errors = err['error'];
            }
        );
    }

    public logout() {
        this.token = null;
        this.token_expires = null;
        this.username = null;

        localStorage.removeItem('id_token');
    }

    private updateData(token) {
        this.token = token;
        this.errors = [];

        const token_parts = this.token.split(/\./);
        const token_decoded = JSON.parse(window.atob(token_parts[1]));
        this.token_expires = new Date(token_decoded.exp * 1000);
        this.username = token_decoded.username;

        localStorage.setItem('id_token', this.token);
    }

    /*public registerUser(userData): Observable<any> {
        return this.http.post('/api/users/', userData, this.httpOptions);
    }*/

    public registerUser(userData) {
        this.http.post('/api/users/', JSON.stringify(userData), this.httpOptions).subscribe(
            data => {
                console.log(data);
            },
            err => {
                this.errors = err['error'];
            }
        );
    }
}
