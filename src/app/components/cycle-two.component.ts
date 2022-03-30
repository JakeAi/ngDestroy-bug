import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "cycle-two",
  template: ` <Button text="Go to cycle three" (tap)="navigateTo()"></Button> `,
  styles: [``],
})
export class CycleTwoComponent implements OnInit, OnDestroy {
  constructor(private router: RouterExtensions) {}

  navigateTo(): void {
    this.router.navigate(["../cycle3"], {
      clearHistory: true,
    });
  }

  ngOnInit(): void {
    console.log("CYCLE_TWO Init");
  }

  ngOnDestroy(): void {
    console.log("CYCLE_TWO Destroyed");
  }
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NativeScriptRouterModule,
  RouterExtensions,
} from "@nativescript/angular";

@NgModule({
  declarations: [CycleTwoComponent],
  imports: [
    CommonModule,
    NativeScriptRouterModule.forChild([
      {
        path: "",
        component: CycleTwoComponent,
      },
    ]),
  ],
})
export class CycleTwoModule {}
