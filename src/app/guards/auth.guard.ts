import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true).pipe(tap(d => console.log(d)));
  }

  public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(childRoute, state);
  }
}
