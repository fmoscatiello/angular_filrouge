import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

    constructor(private router: Router) { }


    async canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Promise<boolean> {
        const role = localStorage.getItem('role'); // Convert Observable to Promise and await the result
        if (role === 'ADMIN') {
            console.log('AdminGuard: Access granted');
            return true; // Allow access if role is ADMIN
        } else {
            console.log('AdminGuard: Access denied');
            this.router.navigate(['/not-found']); // Redirect to unauthorized page
            return false;
        }
    }
}
