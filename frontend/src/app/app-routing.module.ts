import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent }   from './components/register/register.component';
import { LoginComponent }   from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SettingComponent } from './components/settings/setting/setting.component';
import { HelpComponent } from './components/help/help/help.component';
import { ChatsComponent } from './components/chats/chats/chats.component';
import { UserComponent } from './components/user/user/user.component';
import { NotFoundComponent } from './components/error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './components/error-pages/server-error/server-error.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', component: LandingComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'settings', component: SettingComponent },
    { path: 'help', component: HelpComponent },
    { path: 'chats', component: ChatsComponent },
    { path: 'profile', component: UserComponent },
    { path: '404', component: NotFoundComponent },
    { path: '500', component: ServerErrorComponent },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
