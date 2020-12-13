import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private cookieService: CookieService,
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let csrftoken = this.cookieService.get('csrftoken');
        let jwttoken = this.cookieService.get('jwttoken');

        if (jwttoken){
            request = request.clone({
                setHeaders: {
                    // This is where you can use your various tokens
                    Authorization: `JWT ${jwttoken}`,
                    'X-CSRFToken': `${csrftoken}`
                }
            });
        }

        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log(event,"cool it worked!")
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401 || err.status === 403) {
                    const currentUrl = this.router.url
                    if (currentUrl != '/log-in') {
                        alert("Session ended. Please login again")
                        this.cookieService.delete('jwttoken')
                        this.router.navigate(['/log-in'], {queryParams: {next: currentUrl}})
                    }
                }
            }
        }));
    }
}
