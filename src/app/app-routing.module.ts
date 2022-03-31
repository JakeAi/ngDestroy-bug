import { NgModule } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { AuthGuard } from '~/app/guards/auth.guard';

const cycle1:Route = {path: 'cycle1', loadChildren: () => import('./components/cycle-one.component').then(m => m.CycleOneModule)};
const cycle2:Route = {path: 'cycle2', loadChildren: () => import('./components/cycle-two.component').then(m => m.CycleTwoModule)};
const cycle3:Route = {path: 'cycle3', loadChildren: () => import('./components/cycle-three.component').then(m => m.CycleThreeModule)};

const routes: Routes = [
  { path: '', redirectTo: '/cycle1', pathMatch: 'full' },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [cycle1, cycle2, cycle3],
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
