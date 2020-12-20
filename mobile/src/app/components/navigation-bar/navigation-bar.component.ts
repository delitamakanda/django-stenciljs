import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { TranslateService } from '../../services/translate/translate.service';
import { User } from '../../models/user';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { ErrorHandlerService } from '../../shared/error-handler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  userData: User;
  listAccountDetailSub: Subscription;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private router: Router,
    private translate: TranslateService,
    private errorService: ErrorHandlerService
  ) { }

  get userEmail(): string {
    if (this.userData && this.userData.email) {
      return this.userData.email
    }
    return null;
  }

  ngOnInit() {
    this.listAccountDetailSub = this.dashboardService.detailUser().subscribe(data => {
      this.userData = data
    }, (error) => {
      this.errorService.handleError(error);
    });
  }

  public logout() {
    this.authService.performLogout("logout message");
    this.router.navigate(['/sign-out']);
  }

  public setLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnDestroy() {
    if (this.listAccountDetailSub) {
      this.listAccountDetailSub.unsubscribe();
    }

  }

}
