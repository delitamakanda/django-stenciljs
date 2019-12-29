import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

    @Output() toggleSidenav = new EventEmitter<void>();
    @Output() isAuthenticated = new EventEmitter<void>();

    constructor(
        private translate: TranslateService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { }

    public logout() {
        this.authService.performLogout("logout message");
        this.router.navigate(['/logout']);
    }

    public goToProfile() {
        this.router.navigate(['/profile']);
    }

}
