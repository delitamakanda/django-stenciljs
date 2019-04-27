import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthLogin } from '../../models/auth';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    listRelationship: any;
    results = [];
    userData:User;
    tokenExists = false;

    constructor(
        private dashboardService: DashboardService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.getData();
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
