import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from '../services/user/user.service';
import { TranslateService } from '../services/translate/translate.service';

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

    constructor(private translate: TranslateService, private userService: UserService) { }

    ngOnInit() {
        this.user = {
            emailOrUsername: '',
            password: '',
        };
    }

    login() {
        this.userService.login({'username': this.user.emailOrUsername, 'password': this.user.password});
    }
}
