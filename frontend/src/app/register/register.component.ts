import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit, ErrorStateMatcher {
    register;
    hide = true;

    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }

    constructor(private userService: UserService) {}

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    ngOnInit() {
        this.register = {
            username: '',
            password: '',
            email: ''
        };
    }

    createAccount() {
        this.userService.registerUser(this.register).subscribe(
            response => {
                alert('User ' + this.register.username + ' has been created!')
            },
            error => console.log('error' , error)
        )
    }

}
