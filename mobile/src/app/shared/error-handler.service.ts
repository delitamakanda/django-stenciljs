import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  errorMessage: string = '';

  constructor(private router: Router) { }

  handleError = (error: HttpErrorResponse) => {
    if (error.status === 500) {
      this.handle500Error(error);
    } else if (error.status === 404) {
      this.handle404Error(error);
    } else {
      this.handleOtherError(error);
    }
  }

  handle500Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.router.navigate(['/500']);
  }

  handle404Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.router.navigate(['/404']);
  }

  handleOtherError = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    //TODO: this will be fixed later;
  }

  createErrorMessage(error: HttpErrorResponse) {
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
