import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { AuthClaimsAgreementsGuard } from '../guards/auth-claims-agreements.guard';

@Component({
  selector: 'cycle-one',
  template: `
    <Button
      text="Go to cycle two"
      [nsRouterLink]="['/cycle2/5']"
      [clearHistory]="true"
    ></Button>
  `,
  styles: [``],
})
export class CycleOneComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('CYCLE_ONE Init');
  }

  ngOnDestroy(): void {
    console.log('CYCLE_ONE Destroyed');
  }
}

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthClaimsAgreementsGuard],
    data: {},
    children: [
      { path: '', component: CycleOneComponent },
      { path: ':id', component: CycleOneComponent },
      { path: ':id/:recovery', component: CycleOneComponent },
    ],
  },
];

@NgModule({
  declarations: [CycleOneComponent],
  imports: [
    CommonModule,
    NativeScriptRouterModule.forChild(routes),
  ],
})
export class CycleOneModule {}
