import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { TranslateService } from '../../services/translate/translate.service';

import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';

import { User } from '../../models/user';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, ErrorStateMatcher {
    hide = true;
    public user: any;

    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    constructor(
        private translate: TranslateService,
        private userService: UserService,
        private authService: AuthService,
        public cookieService: CookieService
    ) { }

    ngOnInit() {
        this.user = {
            emailOrUsername: '',
            password: '',
        };
    }

    login() {
        this.userService.login({'username': this.user.emailOrUsername, 'password': this.user.password});
    }

    signin () {
        this.authService.login(this.user);
    }
}
