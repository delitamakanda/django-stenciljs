import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DocsComponent } from './components/docs/docs.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './components/error-pages/server-error/server-error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChatsComponent } from './components/dashboard/chats/chats.component';
import { UserProfileComponent } from './components/dashboard/user-profile/user-profile.component';

import { MaterialModule } from './shared/material.module';
import { GravatarModule } from 'ngx-gravatar';
import { CookieService } from 'ngx-cookie-service';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { GenderService } from './services/user/gender/gender.service';
import { DashboardService } from './services/dashboard/dashboard.service';
import { TranslateService } from './services/translate/translate.service';
import { TranslatePipe } from './pipes/translate/translate.pipe';

import { TokenInterceptor } from './services/auth/token.interceptor';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NewPhotoComponent } from './components/dashboard/user-profile/new-photo/new-photo.component';
import { SafePipe } from './pipes/safe/safe.pipe';

export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use('fr');
}

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    LogoutComponent,
    NotFoundComponent,
    ServerErrorComponent,
    DashboardComponent,
    ChatsComponent,
    UserProfileComponent,
    TranslatePipe,
    NavigationBarComponent,
    NewPhotoComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    GravatarModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [
    CookieService,
    UserService,
    AuthService,
    GenderService,
    DashboardService, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    TranslateService, {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    },
    TokenInterceptor,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewPhotoComponent
  ]
})
export class AppModule { }
