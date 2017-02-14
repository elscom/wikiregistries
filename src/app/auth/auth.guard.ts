/**
 * Created by ahsanayaz on 14/02/2017.
 */


// auth-guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth2.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    /**
     * @author Ahsan Ayaz
     * This function decides whether the user is logged in or not and redirects the user to login page
     * if the user is not logged in
     */
    canActivate() {
        if(!this.authService.isLoggedIn()){
            this.router.navigate(['/login']);
        }
        return this.authService.isLoggedIn();
    }
}
