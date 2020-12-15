import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.authService.isAuth) {
      console.log('je me connecte')
      return true
    } else {
      console.log('je ne peut pas me connecter')
      this.router.navigate(['auth'])
    }
  }

  constructor(private authService: AuthService, private router: Router) { }
}
