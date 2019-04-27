import { Component, OnInit } from '@angular/core';
import { TranslateService } from './services/translate/translate.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import { AuthService } from './services/auth/auth.service';

interface ROUTE {
    icon?: string;
    route?: string;
    title?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    tokenExists = false;

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
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private authService: AuthService
    ) {
        this.matIconRegistry.addSvgIcon(
          "love",
          this.domSanitizer.bypassSecurityTrustResourceUrl("http://localhost:4200/assets/love_icon.svg")
        );
    }

    ngOnInit() {
        this.tokenExists = this.authService.checkToken();
    }

    setLang(lang: string) {
        this.translate.use(lang);
    }
}
