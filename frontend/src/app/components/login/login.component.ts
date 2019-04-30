import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { TranslateService } from '../../services/translate/translate.service';

import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';

import { AuthLogin } from '../../models/auth';
import { User } from '../../models/user';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy, ErrorStateMatcher {
    hide = true;
    public user: any;

    userData: User;
    loginForm: FormGroup;
    usernameField: FormControl;
    passwordField: FormControl;
    authLoginSub: any;
    loginErrors: any;
    tokenExists: boolean;
    didLogin = false;

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

        let username = this.authService.getUsername()
          this.usernameField  = new FormControl(username, [
                      Validators.required,
                      Validators.minLength(0),
                      Validators.maxLength(280)
                 ])
          this.passwordField  = new FormControl("", [
                      Validators.required,
                      Validators.minLength(4),
                      Validators.maxLength(280)
                 ])
          this.loginForm = new FormGroup({
              'usernameField': this.usernameField,
              'passwordField': this.passwordField
          })
          this.tokenExists = this.authService.checkToken();
    }

    ngOnDestroy() {
        if (this.authLoginSub){
          this.authLoginSub.unsubscribe()
        }
    }

    doLogin(data) {
        this.authLoginSub = this.authService.login(data).subscribe(data=>{
       this.userData = data as User;
       let token = this.userData.token || null;
       let date = new Date(data.expires);
       this.authService.performLogin(token, date);
       this.authService.setUsername(this.userData);
       this.didLogin = true;
      }, error=>{
        this.loginErrors = error['error']['detail']
      })
    }

    handleSubmit(event:any, ourLoginDir:NgForm, loginFormGroup:FormGroup){
          event.preventDefault()
          if (ourLoginDir.submitted){
              // interact with the server
              let authLoginData = new AuthLogin(
                  loginFormGroup.value['usernameField'],
                  loginFormGroup.value['passwordField']
                  )
              this.doLogin(authLoginData)
              ourLoginDir.resetForm({})
          }
      }

    login() {
        this.userService.login({'username': this.user.emailOrUsername, 'password': this.user.password});
    }

    signin () {
        this.authService.login(this.user);
    }
}
