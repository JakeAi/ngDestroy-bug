import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "cycle-one",
  template: `
    <Button
      text="Go to cycle two"
      [nsRouterLink]="['../cycle2']"
      [clearHistory]="true"
    ></Button>
  `,
  styles: [``],
})
export class CycleOneComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log("CYCLE_ONE Init");
  }

  ngOnDestroy(): void {
    console.log("CYCLE_ONE Destroyed");
  }
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NativeScriptRouterModule } from "@nativescript/angular";

@NgModule({
  declarations: [CycleOneComponent],
  imports: [
    CommonModule,
    NativeScriptRouterModule.forChild([
      {
        path: "",
        component: CycleOneComponent,
      },
    ]),
  ],
})
export class CycleOneModule {}
