import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from '../environments/environment';

import { MaterialModule } from './shared/material.module';

import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { DashboardService } from './services/dashboard/dashboard.service';
import { TranslateService } from './services/translate/translate.service';
import { TranslatePipe } from './pipes/translate/translate.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// UI
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptor } from './services/auth/token.interceptor';

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
    DashboardComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    ServiceWorkerModule.register('service-worker.js', { enabled: environment.production }),
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
      },
      TokenInterceptor,
      DashboardService,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
