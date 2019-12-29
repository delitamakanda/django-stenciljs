import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../services/translate/translate.service';

import { AuthService } from '../../services/auth/auth.service';

interface ROUTE {
    icon?: string;
    route?: string;
    title?: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

    myWorkRoutes: ROUTE[] = [
        {
            icon: 'assignment',
            route: 'dashboard',
            title: 'Board',
        },
        {
          icon: 'people',
          route: 'chats',
          title: 'Chat',
        },
        {
          icon: 'help',
          route: 'help',
          title: 'Help',
        },
        {
          icon: 'settings',
          route: 'settings',
          title: 'Settings',
        }
    ];

    customerRoutes: ROUTE[] = [];

  constructor(
      private translate: TranslateService,
      private authService: AuthService
  ) { }

  ngOnInit() {
  }

  isAuthenticated () {
      return this.authService.checkToken();
  }

  setLang(lang: string) {
      this.translate.use(lang);
  }

}
