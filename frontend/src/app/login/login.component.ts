import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, ErrorStateMatcher {
    login;
    hide = true;

    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    constructor() { }

    ngOnInit() {
        this.login = {
            emailOrUsername: '',
            password: '',
        };
    }

    loginAccount() {
        
    }

}
