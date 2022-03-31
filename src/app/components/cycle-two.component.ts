import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { NativeScriptRouterModule, RouterExtensions, } from '@nativescript/angular';
import { AuthClaimsAgreementsGuard } from '../guards/auth-claims-agreements.guard';
import { CheckForUpdateGuard } from '../resolvers/check-for-updates.resolver';
import { ConnectResolver } from '../resolvers/connect.resolver';
import { CsvVersionResolver } from '../resolvers/csv-version.resolver';
import { DeviceUnlockResolver } from '../resolvers/device-unlock.resolver';


@Component({
  selector: 'cycle-two',
  template: `
    <Button text="Go to cycle three" (tap)="navigateTo()"></Button> `,
  styles: [``],
})
export class CycleTwoComponent implements OnInit, OnDestroy {
  constructor(private router: RouterExtensions) {}

  navigateTo(): void {
    this.router.navigate(['../cycle3'], {
      clearHistory: true,
    });
  }

  ngOnInit(): void {
    console.log('CYCLE_TWO Init');
  }

  ngOnDestroy(): void {
    console.log('CYCLE_TWO Destroyed');
  }
}

const csvComponent: Route = {
  path: '',
  component: CycleTwoComponent,
  canActivate: [AuthClaimsAgreementsGuard],
};

const checkForUpdatesResolver: Route = {
  path: '',
  resolve: { upToDateDevice: CheckForUpdateGuard },
  children: [csvComponent],
};
const deviceUnlockResolver: Route = {
  path: '',
  resolve: { unlockedDevice: DeviceUnlockResolver },
  children: [checkForUpdatesResolver],
};
const csvVersionCheckResolver: Route = {
  path: '',
  resolve: { csvDevice: CsvVersionResolver },
  children: [deviceUnlockResolver],
};
const connectResolver: Route = {
  path: ':id',
  resolve: { connectedDevice: ConnectResolver },
  children: [csvVersionCheckResolver],
};

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthClaimsAgreementsGuard],
    children: [connectResolver],
  },
];

@NgModule({
  declarations: [CycleTwoComponent],
  imports: [
    CommonModule,
    NativeScriptRouterModule.forChild(routes),
  ],
})
export class CycleTwoModule {}
