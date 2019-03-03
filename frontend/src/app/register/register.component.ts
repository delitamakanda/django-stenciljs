import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, ErrorStateMatcher {
    register;
    hide = true;

    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }

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

    }

}
