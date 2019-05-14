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
            route: 'sales/activities',
            title: 'Activities',
        }, {
            icon: 'dashboard',
            route: 'sales/dashboards',
            title: 'Dashboards',
        }
    ];

    customerRoutes: ROUTE[] = [
    {
      icon: 'contacts',
      route: 'sales/accounts',
      title: 'Accounts',
    }, {
      icon: 'people',
      route: 'sales/contacts',
      title: 'Contacts',
    }, {
      icon: 'settings_phone',
      route: 'sales/leads',
      title: 'Leads',
    }, {
      icon: 'account_box',
      route: 'sales/opportunities',
      title: 'Opportunities',
    }
  ];

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
