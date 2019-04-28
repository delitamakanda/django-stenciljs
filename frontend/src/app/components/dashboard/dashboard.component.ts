import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user';
import { AuthLogin } from '../../models/auth';
import { AuthService } from '../../services/auth/auth.service';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { TranslateService } from '../../services/translate/translate.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    listRelationship: any;
    results = [];
    userData: User;
    tokenExists: boolean;

    constructor(
        private translate: TranslateService,
        private dashboardService: DashboardService,
        private authService: AuthService,
        public cookieService: CookieService
    ) { }

    ngOnInit() {
        this.getData();
        this.tokenExists = this.authService.checkToken();
    }

    getData(){
        this.listRelationship = this.dashboardService.list().subscribe(data=>{
            console.log(data)
            this.results = data.results
        })
    }

    ngOnDestroy() {
        if (this.listRelationship){
            this.listRelationship.unsubscribe()
        }
    }

}
