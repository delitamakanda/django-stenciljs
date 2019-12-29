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
import { GenderService } from './services/user/gender/gender.service';
import { DashboardService } from './services/dashboard/dashboard.service';
import { TranslateService } from './services/translate/translate.service';
import { TranslatePipe } from './pipes/translate/translate.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';

// UI
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { GravatarModule } from  'ngx-gravatar';

import { CookieService } from 'ngx-cookie-service';

import { TokenInterceptor } from './services/auth/token.interceptor';
import { SettingComponent } from './components/settings/setting/setting.component';
import { HelpComponent } from './components/help/help/help.component';
import { ChatsComponent } from './components/chats/chats/chats.component';
import { UserComponent } from './components/user/user/user.component';

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
    NavigationBarComponent,
    LogoutComponent,
    SideNavComponent,
    SettingComponent,
    HelpComponent,
    ChatsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    // ServiceWorkerModule.register('service-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    GravatarModule
  ],
  providers: [
      UserService,
      AuthService,
      GenderService,
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
