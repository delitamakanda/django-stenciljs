import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { GenderService } from '../../services/user/gender/gender.service';

import { AuthRegister } from '../../models/auth';
import { User } from '../../models/user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit, ErrorStateMatcher {
    register;
    hide = true;
    listGender: any;
    listResultGenders = [];

    userData: User;
    registerForm: FormGroup;
    usernameField: FormControl;
    passwordField: FormControl;
    passwordFieldVerification: FormControl;
    emailField: FormControl;
    genderField: FormControl;
    authLoginSub: any;
    loginErrors: any;

    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }

    constructor(
        private userService: UserService,
        private authService: AuthService,
        private genderService: GenderService,
        private router: Router
    ) {
        this.listGenders();
    }

    listGenders () {
        this.listGender = this.genderService.getGenders().subscribe(data=>{
            console.log(data)
            this.listResultGenders = data
        });
    }

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    ngOnInit() {
        this.usernameField  = new FormControl("", [
                    Validators.required,
                    Validators.minLength(0),
                    Validators.maxLength(280)
               ])
       this.emailField  = new FormControl("", [
                   Validators.email,
                   Validators.minLength(0),
                   Validators.maxLength(280)
              ])
        this.passwordField  = new FormControl("", [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(280)
               ])
       this.passwordFieldVerification  = new FormControl("", [
                   Validators.required,
                   Validators.minLength(4),
                   Validators.maxLength(280)
              ])
      this.genderField  = new FormControl("", [
                  Validators.required
             ])

        this.registerForm = new FormGroup({
            'usernameField': this.usernameField,
            'passwordField': this.passwordField,
            'passwordFieldVerification': this.passwordFieldVerification,
            'emailField': this.emailField,
            'genderField': this.genderField
        });
        /*this.register = {
            username: '',
            password: '',
            email: '',
            confirmation_code: 'toto',
            details: 'toto'
        };*/
    }

    ngOnDestroy() {
        if (this.authLoginSub){
          this.authLoginSub.unsubscribe()
        }

        if (this.listGender){
            this.listGender.unsubscribe()
        }
    }

    createAccount(data) {
        /*this.userService.registerUser(this.register).subscribe(
            response => {
                alert('User ' + this.register.username + ' has been created!')
            },
            error => console.log('error' , error)
        )*/
        // this.userService.registerUser(this.register);
        this.authLoginSub = this.authService.register(data).subscribe(data=>{
           this.userData = data as User;
           this.authService.setUsername(this.userData);
           this.router.navigate(['/login']);
          }, error=>{
              console.log(error)
            //this.loginErrors = error['errors']['detail']
          })
    }

    handleSubmit(event:any, ourRegisterDir:NgForm, registerFormGroup:FormGroup) {
        event.preventDefault();
        if(ourRegisterDir.submitted) {
            let authRegisterData = new AuthRegister(
                registerFormGroup.value['usernameField'],
                registerFormGroup.value['emailField'],
                registerFormGroup.value['passwordField'],
                registerFormGroup.value['passwordFieldVerification'],
                registerFormGroup.value['genderField']
                )
            this.createAccount(authRegisterData);
            ourRegisterDir.resetForm({})
        }
    }

}
