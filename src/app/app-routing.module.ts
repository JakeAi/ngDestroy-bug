import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/cycle1', pathMatch: 'full' },
  { path: 'cycle1', loadChildren: () => import('./components/cycle-one.component').then(m => m.CycleOneModule) },
  { path: 'cycle2', loadChildren: () => import('./components/cycle-two.component').then(m => m.CycleTwoModule) },
  { path: 'cycle3', loadChildren: () => import('./components/cycle-three.component').then(m => m.CycleThreeModule) },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
