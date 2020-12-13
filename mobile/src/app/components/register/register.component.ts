import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { GenderService } from '../../services/user/gender/gender.service';
import { User, Gender } from '../../models';
import { Subscription } from 'rxjs';
import { passwordValidators } from './password.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  hide = true;
  hide2 = true;
  signupFormGroup: FormGroup;
  userData: User;
  loginErrors: any;
  authLoginSub: Subscription;
  listGenderSub: Subscription;
  listResultGenders: Gender[];

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private genderService: GenderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listGenders();

    this.signupFormGroup = this.fb.group({
      usernameField: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(280)]],
      emailField: ['', [Validators.email, Validators.minLength(4), Validators.maxLength(280)]],
      passwordField: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(280)]],
      passwordFieldVerification: ['', [Validators.required ]],
      genderField: ['', [Validators.required]]
    }, {
      validator: passwordValidators.PasswordShouldMatch 
    })
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['passwordField'].value === frm.controls['passwordFieldVerification'].value ? null : { 'mismatch': true };
  }

  listGenders() {
    this.listGenderSub = this.genderService.getGenders().subscribe(data => {
      this.listResultGenders = data;
    });
  }

  handleSubmit() {
    const formData = {
      'username': this.signupFormGroup.get('usernameField').value,
      'email': this.signupFormGroup.get('emailField').value,
      'password': this.signupFormGroup.get('passwordField').value,
      'password2': this.signupFormGroup.get('passwordFieldVerification').value,
      'gender': this.signupFormGroup.get('genderField').value
    };
    this.authLoginSub = this.authService.register(formData).subscribe(data => {
      this.userData = data as User;
      this.authService.setUsername(this.userData);
      this.router.navigate(['/log-in']);
    }, error => {
      console.log(error)
      this.loginErrors = error['error']
    })

  }

  revert() {
    this.signupFormGroup.reset()
  }

  ngOnDestroy() {
    if(this.listGenderSub != undefined) {
      this.listGenderSub.unsubscribe();
    }

    if (this.authLoginSub != undefined) {
      this.authLoginSub.unsubscribe();
    }
  }

}
