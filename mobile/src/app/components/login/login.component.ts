import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true;
  user: User;
  userData: User;
  loginForm: FormGroup;
  authLoginSub: Subscription;
  loginErrors: any;
  tokenExists: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public cookieService: CookieService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      usernameField: [this.authService.getUsername(), [Validators.required, Validators.minLength(0), Validators.maxLength(280)]],
      passwordField: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(280)]]
    });

    this.tokenExists = this.authService.checkToken();
  }

  onSubmit() {
    const formData = {
      'username': this.loginForm.get('usernameField').value,
      'password': this.loginForm.get('passwordField').value,
    };

    this.authLoginSub = this.authService.login(formData).subscribe(data => {
      this.userData = data as User;
      let token = this.userData.token || null;
      let date = new Date(data.expires);
      this.authService.performLogin(token, date);
      this.authService.setUsername(this.userData);
    }, error => {
      this.loginErrors = error['error']['detail']
    })
  }

  revert() {
    this.loginForm.reset()
  }

  ngOnDestroy() {
    if (this.authLoginSub != undefined) {
      this.authLoginSub.unsubscribe();
    }
  }

}
