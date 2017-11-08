import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationGuardService implements CanActivate, CanActivateChild {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.isLoggedIn
      .take(1)
      .map((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      });
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

}
