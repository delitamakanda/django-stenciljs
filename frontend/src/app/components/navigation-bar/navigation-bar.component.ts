import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

    @Output() toggleSidenav = new EventEmitter<void>();

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { }

    public logout() {
        this.authService.performLogout();
        this.router.navigate(['/']);
    }

}
