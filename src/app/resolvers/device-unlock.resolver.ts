import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class DeviceUnlockResolver implements Resolve<boolean> {

  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return of(true).pipe(tap(d => console.log(d)));
  }
}
