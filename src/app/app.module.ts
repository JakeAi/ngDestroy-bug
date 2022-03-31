import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AuthClaimsAgreementsGuard } from '~/app/guards/auth-claims-agreements.guard';
import { AuthGuard } from '~/app/guards/auth.guard';
import { CheckForUpdateGuard } from '~/app/resolvers/check-for-updates.resolver';
import { ConnectResolver } from '~/app/resolvers/connect.resolver';
import { CsvVersionResolver } from '~/app/resolvers/csv-version.resolver';
import { DeviceUnlockResolver } from '~/app/resolvers/device-unlock.resolver';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent],
  providers: [
    AuthGuard, AuthClaimsAgreementsGuard, CheckForUpdateGuard, ConnectResolver, CsvVersionResolver, DeviceUnlockResolver
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
