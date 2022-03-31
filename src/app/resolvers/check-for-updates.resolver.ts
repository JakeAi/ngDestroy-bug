import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class CheckForUpdateGuard implements Resolve<boolean> {

  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return of(true);
  }
}
