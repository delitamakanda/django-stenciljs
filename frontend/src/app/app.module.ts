import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';


import { MaterialModule } from './material.module';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { TranslateService } from './services/translate/translate.service';
import { TranslatePipe } from './pipes/translate/translate.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { CookieService } from 'angular2-cookie/core';

export function setupTranslateFactory (service: TranslateService): Function {
    return () => service.use('fr');
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TranslatePipe,
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule
  ],
  providers: [
      UserService,
      AuthService,
      CookieService,
      TranslateService,
      {
          provide: APP_INITIALIZER,
          useFactory: setupTranslateFactory,
          deps: [TranslateService],
          multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
